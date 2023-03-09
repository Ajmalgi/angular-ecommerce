import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdHomeComponent } from './components/ad-home/ad-home.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { ViewCategoryComponent } from './components/view-category/view-category.component';
import { ViewSellerComponent } from './components/view-seller/view-seller.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { ApproveSellerComponent } from './components/approve-seller/approve-seller.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdHomeComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ViewSellerComponent,
    ViewCustomerComponent,
    ApproveSellerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
