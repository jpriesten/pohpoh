import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { OrganisationService } from "../../../services/organisation.service";
import { AuthenticationService } from "../../../services/authentication.service";
import { NewproductComponent } from "./newproduct/newproduct.component";

@Component({
  selector: "app-myproducts",
  templateUrl: "./myproducts.component.html",
  styleUrls: ["./myproducts.component.css"]
})
export class MyproductsComponent implements OnInit {
  public organisationProfile: any;
  constructor(
    private _organisation: OrganisationService,
    private _router: Router,
    private _dialog: MatDialog,
    private _auth: AuthenticationService
  ) {}

  ngOnInit() {
    this.profile();
  }

  openDialog() {
    const dialogRef = this._dialog.open(NewproductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async profile() {
    try {
      let result = await this._organisation.profile();
      this.organisationProfile = result.results;
      console.log("My profile: ", this.organisationProfile);
    } catch (error) {
      if (error.message && error.message == "jwt expired") {
        this._auth.actionJwtExpired();
        this._router.navigate(['/login']);
      }
      console.error("Error: ", error);
    }
  }
}
