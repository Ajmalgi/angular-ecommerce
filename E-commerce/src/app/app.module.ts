import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CHomeComponent } from './components/c-home/c-home.component';
import { AdminModule } from './modules/admin/admin.module';
import { SellerModule } from './modules/seller/seller.module';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { SellerRegComponent } from './components/seller-reg/seller-reg.component';
import { FormsModule } from '@angular/forms';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeBodyComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    CHomeComponent,
    PageNotfoundComponent,
    SellerRegComponent,
    SellerLoginComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    
    FormsModule


  ],

  providers: [],
  exports:[
    FooterComponent
   ],

  bootstrap: [AppComponent]
})
export class AppModule { }
