import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-newproduct",
  templateUrl: "./newproduct.component.html",
  styleUrls: ["./newproduct.component.css"]
})
export class NewproductComponent implements OnInit {
  newProductFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

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
}
