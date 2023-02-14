import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CHomeComponent } from './components/c-home/c-home.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerRegComponent } from './components/seller-reg/seller-reg.component';
import { AddCategoryComponent } from './modules/admin/components/add-category/add-category.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
   { path: 'seller', loadChildren: () => import('./modules/seller/seller.module').then(m => m.SellerModule) },
   {path: '',redirectTo:'home',pathMatch:'full'},
  //  {path: 'home',component:HomeBodyComponent},
   {path: 'home',component:CHomeComponent},
   {path: 'products',component:ProductsComponent},
   {path: 'products/:id',component:ProductDetailsComponent},
   {path: 'cart',component:CartComponent},
   {path: 'addcategory',component:AddCategoryComponent},
   {path: 'seller_reg',component:SellerRegComponent},
   {path: 'seller_login',component:SellerLoginComponent},
  //  { path:'**',component:PageNotfoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
