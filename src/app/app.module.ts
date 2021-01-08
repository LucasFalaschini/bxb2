import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";




// no layouts views
import { LandingComponent } from "./views/landing/landing.component";

// components for views and layouts

import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    LandingComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, 
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
