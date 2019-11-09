import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthenticationService, private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    this._auth.isAuthenticated()
    console.log("IsLoggedin?: ", this._auth.isLoggedIn);
    if (this._auth.isLoggedIn) {
      // authorised so return true
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}
