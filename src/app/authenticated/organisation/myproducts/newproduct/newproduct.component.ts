import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { ProductService } from "../../../../services/product.service";

@Component({
  selector: "app-newproduct",
  templateUrl: "./newproduct.component.html",
  styleUrls: ["./newproduct.component.css"]
})
export class NewproductComponent implements OnInit {
  newProductFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _productSvc: ProductService
  ) {}

  ngOnInit() {
    this.newProductFormGroup = this._formBuilder.group({
      name: ["", Validators.required],
      productCode: ["", Validators.required],
      descr: ["", Validators.required],
      manufacturerName: ["", Validators.required],
      manufacturerAddress: ["", Validators.required],
      dateCreated: ["", Validators.required],
      expiryDate: [""],
      photo: [""],
      isVerified: [""]
    });
  }

  validation_messages = {
    name: [{ type: "required", message: "Product name is required." }],
    productCode: [{ type: "required", message: "Product code is required." }],
    descr: [{ type: "required", message: "Product description is required." }],
    manufacturerName: [
      { type: "required", message: "Manufacturer's name is required." }
    ],
    manufacturerAddress: [
      { type: "required", message: "Manufacturer's address is required." }
    ],
    dateCreated: [{ type: "required", message: "Date created is required." }]
  };

  get regForm() {
    return this.newProductFormGroup.controls;
  }

  async newProduct() {
    try {
      let newP = await this._productSvc.newProduct(
        this.regForm.name.value,
        this.regForm.productCode.value,
        this.regForm.descr.value,
        this.regForm.manufacturerName.value,
        this.regForm.manufacturerAddress.value,
        this.regForm.dateCreated.value,
        this.regForm.expiryDate.value,
        this.regForm.photo.value
      );
      console.log("New product: ", newP);
    } catch (error) {
      console.error("Error: ", error);
    }
  }
}
