import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingComponent } from "./components/landing/landing.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";

import { ProductsComponent } from "./authenticated/products/products.component";
import { VerifyComponent } from "./authenticated/verify/verify.component";

import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";

import { OrganisationComponent } from "./authenticated/organisation/organisation.component";
import { MyproductsComponent } from "./authenticated/organisation/myproducts/myproducts.component";

import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  // Paths that don't need authentication to get to
  {
    path: "",
    redirectTo: "/welcome",
    pathMatch: "full"
  },
  {
    path: "welcome",
    component: LandingComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "verify",
    component: VerifyComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },

  // Paths that need authentication to access
  {
    path: "organisation",
    children: [
      {
        path: "",
        component: OrganisationComponent
      },
      {
        path: "my-products",
        component: MyproductsComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
