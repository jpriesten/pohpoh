import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { CoreService } from "../../../services/core/core.service";
import { OrganisationService } from "../../../services/organisation.service";
import { AuthenticationService } from "../../../services/authentication.service";
import { ProductService } from "../../../services/product.service";

import { NewproductComponent } from "./newproduct/newproduct.component";

@Component({
  selector: "app-myproducts",
  templateUrl: "./myproducts.component.html",
  styleUrls: ["./myproducts.component.css"]
})
export class MyproductsComponent implements OnInit {
  public organisationProfile: any;
  public organisationProducts: [];
  constructor(
    private _organisation: OrganisationService,
    private _router: Router,
    private _dialog: MatDialog,
    private _auth: AuthenticationService,
    private _productSvc: ProductService,
    private _core: CoreService
  ) {}

  ngOnInit() {
    this.refresh();
    console.log("In My products");
  }

  refresh() {
    this.profile();
    this.fetchMyProducts();
  }

  openDialog() {
    const dialogRef = this._dialog.open(NewproductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        window.location.reload();
      }
    });
  }

  image(product: any) {
    return this._core.image(product);
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

  async fetchMyProducts() {
    try {
      let myProducts = await this._productSvc.fetchProductsByUser();
      this.organisationProducts = myProducts;
      // this.organisationProducts[0].photo = "data:image/png;base64," + myProducts[0].photo;
      console.log("My products: ", this.organisationProducts);
    } catch (error) {
      console.error("Error: ", error);
    }
  }
}
