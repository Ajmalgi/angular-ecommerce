import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SHomeComponent } from './components/s-home/s-home.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { SellerComponent } from './seller.component';

const routes: Routes = [
  { 
    path: '', component: SellerComponent ,
   
  children: [
    {path: '', redirectTo: 'home',pathMatch:'full'},
    { path: 'addproducts',component: AddProductComponent},
    { path: 'home',component: SHomeComponent},
    { path: 'view-orders',component:ViewOrdersComponent},
    { path: 'update-stock',component:UpdateStockComponent},
    { path: 'change-password',component:ChangePasswordComponent},
    
   ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class SellerRoutingModule { }
