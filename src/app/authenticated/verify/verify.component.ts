import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ProductService } from "../../services/product.service";
import { CoreService } from "../../services/core/core.service";

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"]
})
export class VerifyComponent implements OnInit {
  public searchProductFormGroup: FormGroup;
  public productDetails: [];
  public hasProductLoaded = false;
  public verifyClicked = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _productSvc: ProductService,
    private _core: CoreService
  ) {}

  ngOnInit() {
    this.searchProductFormGroup = this._formBuilder.group({
      productCode: ["", Validators.required]
    });
  }

  validation_messages = {
    productCode: [{ type: "required", message: "This code is required" }]
  };

  get searchForm() {
    return this.searchProductFormGroup.controls;
  }

  openSnack(message: String) {
    this._core.openSnackBar(message);
  }

  image(product: any) {
    return this._core.image(product);
  }

  clearField(){
    this.searchForm.productCode.setValue("");
  }

  async verify() {
    console.log("Search Value: ", this.searchForm.productCode.value);
    try {
      this.verifyClicked = true;
      let productCode = this.searchForm.productCode.value;
      let product = await this._productSvc.fetchProductByCode(
        productCode.trim()
      );
      console.log("Product: ", product);
      if (product.length == 0) {
        this.openSnack("No product with such code");
      } else {
        this.productDetails = product;
      }
      this.hasProductLoaded = true;
    } catch (error) {
      console.error("Error: ", error);
      this.hasProductLoaded = false;
    }
  }
}
