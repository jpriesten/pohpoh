import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { QRCodeModule } from '../../node_modules/angularx-qrcode';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material modules/material.module";
import { LandingComponent } from "./components/landing/landing.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { ProductsComponent } from "./authenticated/products/products.component";
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { VerifyComponent } from './authenticated/verify/verify.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { OrganisationComponent } from './authenticated/organisation/organisation.component';
import { MyproductsComponent } from './authenticated/organisation/myproducts/myproducts.component';
import { NewproductComponent } from './authenticated/organisation/myproducts/newproduct/newproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainNavComponent,
    VerifyComponent,
    PagenotfoundComponent,
    OrganisationComponent,
    MyproductsComponent,
    NewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewproductComponent
  ]
})
export class AppModule {}
