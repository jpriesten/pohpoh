import { Component, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  title = "pohpoh";
  public isLoggedIn = false;
  constructor(private _router: Router, private _auth: AuthenticationService) {}
  
  ngOnInit() {
    let token = localStorage.getItem("token");
    if (token && token.length > 0 ){
      this.isLoggedIn = true;
    } else
    this.isLoggedIn = false;
  }

  async logout() {
    try {
      let loggedOut = await this._auth.logout();
      console.log("LoggedOut: ", loggedOut);
      this.isLoggedIn = false;
      this._router.navigate(['/welcome']);
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  }
}
