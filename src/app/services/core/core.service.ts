import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CoreService {
  constructor() {}

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
}
