import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

import { UrlService } from "./core/url.service";
import { CoreService } from "./core/core.service";

import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root"
})
export class OrganisationService {
  constructor(
    private _url: UrlService,
    private _auth: AuthenticationService,
    private _http: HttpClient,
    private _core: CoreService
  ) {}

  profile(): Promise<any> {

    return new Promise((resolve, reject) => {
      this._http.get<any>(this._url.BASE_URL + "users/me", { headers: this._core.authorizedHttpOptions })
        .subscribe(
          response => {
            if (response["error"] != false) {
              reject(response);
              return;
            }
            resolve(response);
          },
          errorResponse => {
            console.log("Errors: ", errorResponse);
            if (errorResponse.error.error != false) {
              reject(errorResponse.error);
              return;
            }
          }
        );
    });
  }
}
