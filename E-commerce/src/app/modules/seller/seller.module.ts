import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { SHomeComponent } from './components/s-home/s-home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SNavbarComponent } from './components/s-navbar/s-navbar.component';





@NgModule({
  declarations: [
    SellerComponent,
    SHomeComponent,
    AddProductComponent,
    FooterComponent,
    SNavbarComponent
   
  
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    FormsModule,
    
  
  ],
 
  
})
export class SellerModule { }
