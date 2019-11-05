import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

import { UrlService } from "./core/url.service";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  public isLoggedIn = false;
  constructor(private _url: UrlService, private _http: HttpClient) {}

  register(
    name: String,
    email: String,
    password: String,
    country: String,
    phoneNumber: Number,
    city: String,
    address: String
  ): Promise<any> {
    let body = {
      name: name,
      email: email,
      password: password,
      country: country,
      city: city,
      address: address,
      phoneNumber: phoneNumber
    };

    return new Promise((resolve, reject) => {
      this._http
        .post<any>(this._url.BASE_URL + "users/create", body, httpOptions)
        .subscribe(response => {
          if (response.token.error != false) {
            reject(response.token);
            return;
          }

          localStorage.setItem("token", response.token.loginToken.results);
          this.isLoggedIn = true;
          resolve(response.token);
        });
    });
  }

  login(email: String, password: String): Promise<any> {
    let body = {
      email: email,
      password: password
    };

    return new Promise((resolve, reject) => {
      this._http
        .post<any>(this._url.BASE_URL + "users/login", body, httpOptions)
        .subscribe(
          response => {
            if (response.token.error == true) {
              reject(response.token);
              return;
            }
            if (response.token.loginToken.error == true) {
              reject(response.token);
              return;
            }

            localStorage.setItem("token", response.token.loginToken.results);
            this.isLoggedIn = true;
            resolve(response.token);
          },
          errorResponse => {
            console.log(errorResponse);
            console.log(this._http.options);
            reject(errorResponse);
            return;
          }
        );
    });
  }

  logout(): Promise<any> {
    
    let token = localStorage.getItem("token");

    let HTTPOptions = new HttpHeaders().set("Authorization", "Bearer " + token);
    return new Promise((resolve, reject) => {
      this._http.post<any>(this._url.BASE_URL + 'users/logout', {}, {headers: HTTPOptions}).subscribe(response => {
        if(response['error'] != false) {
          reject(response);
          return;
        }
        this.removeToken();
        this.isLoggedIn = false;
        resolve(response);
      }, errorResponse => {
        console.log("Errors: ", errorResponse);
        if(errorResponse.error.error != false) {
          // this.tokenExpired = errorResponse.error;
          this.removeToken();
          reject(errorResponse.error);
          return;
        }
      });
    }); 
  }

  removeToken() {
    localStorage.removeItem('token');
    // this.isLoggedIn = false;
    // delete this.token;
    // delete this.tokenExpired;
  }
}
