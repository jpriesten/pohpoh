import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CoreService {
  constructor(
    private _sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar
  ) {}

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
    let photo = this._sanitizer.bypassSecurityTrustResourceUrl(product.photo);
    return photo;
  }

  openSnackBar(message: any) {
    this._snackBar.open(message, "Close", {
      duration: 2000,
    });
  }
}
