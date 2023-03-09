import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ApproveSellerComponent } from './components/approve-seller/approve-seller.component';
import { ViewCategoryComponent } from './components/view-category/view-category.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { ViewSellerComponent } from './components/view-seller/view-seller.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,

    children: [
      { path: 'add-cat', component: AddCategoryComponent },
      { path: 'view-category',component:ViewCategoryComponent},
      { path: 'view-seller',component:ViewSellerComponent},
      { path: 'view-customer',component:ViewCustomerComponent},
      { path: 'approve-seller',component:ApproveSellerComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
