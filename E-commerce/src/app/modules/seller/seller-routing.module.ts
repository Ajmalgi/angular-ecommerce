import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SHomeComponent } from './components/s-home/s-home.component';
import { SellerComponent } from './seller.component';

const routes: Routes = [
  { 
    path: '', component: SellerComponent ,
  children: [
    { path: 'addproducts', component: AddProductComponent},
    { path: 'home', component: SHomeComponent},
   ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class SellerRoutingModule { }
