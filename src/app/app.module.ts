import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ShowProComponent } from './show-pro/show-pro.component';
import { ExtraProComponent } from './extra-pro/extra-pro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { MainWorkComponent } from './main-work/main-work.component';
import { GiveMailComponent } from './give-mail/give-mail.component';
import { RandomItemComponent } from './random-item/random-item.component';
import { LoginComponent } from './login/login.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { PurchaseCartComponent } from './purchase-cart/purchase-cart.component';
import { SignINComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    ShopComponent,
    ContactComponent,
    AboutComponent,
    ShowProComponent,
    ExtraProComponent,
    AccueilComponent,
    MainWorkComponent,
    GiveMailComponent,
    RandomItemComponent,
    LoginComponent,
    ShowproductComponent,
    PurchaseCartComponent,
    SignINComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
