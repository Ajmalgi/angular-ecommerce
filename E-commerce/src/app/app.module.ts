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
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { SellerRegComponent } from './components/seller-reg/seller-reg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { CusLoginComponent } from './components/cus-login/cus-login.component';
import { CusRegComponent } from './components/cus-reg/cus-reg.component';
import { CusProfileComponent } from './components/cus-profile/cus-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { TestingComponent } from './components/testing/testing.component';
import { ZipcodeComponent } from './components/zipcode/zipcode.component'





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
    CusLoginComponent,
    CusRegComponent,
    CusProfileComponent,
    TestingComponent,
    ZipcodeComponent,
    
    

  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    FormsModule,
    ReactiveFormsModule


  ],

  providers: [],
 

  bootstrap: [AppComponent]
})
export class AppModule { }
