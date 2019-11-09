import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../services/authentication.service';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder, 
    private _auth: AuthenticationService,
    private _router: Router) {}

  ngOnInit() {
    this.loginFormGroup = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  validation_messages = {
    email: [
      { type: "required", message: "Email is required." },
      { type: "email", message: "Email address not valid." }
    ],
    password: [{ type: "required", message: "Password is required." }]
  };

  get logForm() {
    return this.loginFormGroup.controls;
  }

  async login() {
    try {
      console.log("Here: ", this.logForm);
      let user = await this._auth.login(this.logForm.email.value, this.logForm.password.value);
      console.log("Logged in User: ", user);
      window.location.href = "/organisation";
    } catch (error) {
      console.error("Login Error: ", error);
    }
  }
}
