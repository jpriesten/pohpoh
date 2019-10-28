import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerFormGroup = this._formBuilder.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      country: ["", Validators.required],
      city: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  validation_messages = {
    name: [{ type: "required", message: "Name is required." }],
    email: [
      { type: "required", message: "Email is required." },
      { type: "email", message: "Email address not valid." }
    ],
    password: [{ type: "required", message: "Password is required." }],
    phone: [{ type: "required", message: "Phone number is required." }],
    address: [{ type: "required", message: "Address is required." }],
    city: [{ type: "required", message: "City is required." }],
    country: [{ type: "required", message: "Country is required." }]

  };

}
