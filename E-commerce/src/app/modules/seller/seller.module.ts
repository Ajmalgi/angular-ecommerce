import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { SHomeComponent } from './components/s-home/s-home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { SNavbarComponent } from './components/s-navbar/s-navbar.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';











@NgModule({
  declarations: [
    SellerComponent,
    SHomeComponent,
    AddProductComponent,
    SNavbarComponent,
    ViewOrdersComponent,
    UpdateStockComponent,
    ChangePasswordComponent,
   
  
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    FormsModule,
    
  
  ],
 
  
})
export class SellerModule { }
