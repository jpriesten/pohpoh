import { Injectable } from "@angular/core";
import { DomSanitizer} from "@angular/platform-browser";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CoreService {
  constructor(private _sanitizer: DomSanitizer) {}

  public httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  public authorizedHttpOptions = new HttpHeaders().set(
    "Authorization",
    "Bearer " + this.token
  );

  get token() {
    return localStorage.getItem("token");
  }

  image(product: any) {
    let photo = this._sanitizer.bypassSecurityTrustResourceUrl(
      product.photo
    );
    return photo;
  }
}
