import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrganisationService } from "../../services/organisation.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-organisation",
  templateUrl: "./organisation.component.html",
  styleUrls: ["./organisation.component.css"]
})
export class OrganisationComponent implements OnInit {
  public organisationProfile: any;

  constructor(
    private _organisation: OrganisationService,
    private _auth: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.profile();
  }

  async profile() {
    try {
      let result = await this._organisation.profile();
      this.organisationProfile = result.results;
      console.log("My profile: ", this.organisationProfile);
    } catch (error) {
      if (error.message && error.message == "jwt expired") {
        this._auth.actionJwtExpired();
        this._router.navigate(["/login"]);
      }
      console.error("Error: ", error);
    }
  }
}
