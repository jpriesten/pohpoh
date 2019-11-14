import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { CoreService } from "../../services/core/core.service";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  public allProducts: [];

  constructor(
    private _router: Router,
    private _productSvc: ProductService,
    private _sanitizer: DomSanitizer,
    private _core: CoreService
  ) {}

  ngOnInit() {
    this.fetchAllProducts();
  }

  async fetchAllProducts() {
    try {
      let myProducts = await this._productSvc.fetchAllProducts();
      this.allProducts = myProducts;
      console.log("All products: ", this.allProducts);
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  image(product: any) {
    return this._core.image(product);
  }
}
