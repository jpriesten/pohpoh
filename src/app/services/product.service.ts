import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

import { UrlService } from "./core/url.service";
import { CoreService } from "./core/core.service";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(
    private _url: UrlService,
    private _http: HttpClient,
    private _core: CoreService
  ) {}

  newProduct(
    name: String,
    productCode: String,
    descr: String,
    manufacturerName: String,
    manufacturerAddress: String,
    dateCreated: String,
    expiryDate: String,
    photo: String
  ): Promise<any> {
    let body = {
      productName: name,
      productCode: productCode,
      descr: descr,
      manufacturerName: manufacturerName,
      manufacturerAddress: manufacturerAddress,
      dateCreated: dateCreated,
      expiryDate: expiryDate,
      photo: photo
    };

    return new Promise((resolve, reject) => {
      this._http
        .post<any>(
          this._url.BASE_URL + "products/new",
          body,
          { headers: this._core.authorizedHttpOptions}
        )
        .subscribe(
          response => {
            if (response.error != false) {
              reject(response.result);
              return;
            }
            resolve(response.result);
          },
          errorResponse => {
            console.log("Errors: ", errorResponse);
            if (errorResponse.error != false) {
              reject(errorResponse.result);
              return;
            }
          }
        );
    });
  }

  fetchProductsByUser(): Promise<any> {

    return new Promise((resolve, reject) => {
      this._http.get<any>(this._url.BASE_URL + "products/me", { headers: this._core.authorizedHttpOptions })
        .subscribe(
          response => {
            if (response.error != false) {
              reject(response.result);
              return;
            }
            resolve(response.result);
          },
          errorResponse => {
            console.log("Errors: ", errorResponse);
            if (errorResponse.error != false) {
              reject(errorResponse.result);
              return;
            }
          }
        );
    });
  }

  fetchAllProducts(): Promise<any> {

    return new Promise((resolve, reject) => {
      this._http.get<any>(this._url.BASE_URL + "products", this._core.httpOptions)
        .subscribe(
          response => {
            if (response.error != false) {
              reject(response.result);
              return;
            }
            resolve(response.result);
          },
          errorResponse => {
            console.log("Errors: ", errorResponse);
            if (errorResponse.error != false) {
              reject(errorResponse.result);
              return;
            }
          }
        );
    });
  }
}
