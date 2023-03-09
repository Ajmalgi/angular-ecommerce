import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {


sellerUrl = "http://127.0.0.1:8000/common/"
addproductUrl = "http://127.0.0.1:8000/seller/"

  constructor(private http:HttpClient) { }

  seller_reg(formData:any):Observable<any>{
    return this.http.post(this.sellerUrl+'seller_reg',formData)
  }

  seller_login(formData:any):Observable<any>{
    return this.http.post(this.sellerUrl + 'seller_login',formData)
  }

  add_product(formData:any):Observable<any>{
    return this.http.post(this.addproductUrl + 'addproduct',formData)
  }
  Sview_products(Sid:any):Observable<any>{
    return this.http.post(this.addproductUrl +'Sview_products',Sid)
  }
  
  change_Password(formData:any, id:number):Observable<any>{
    return this.http.put(this.addproductUrl+'change_password/'+id,formData)
  }

  update_stock(formData:any):Observable<any>{
    return this.http.put(this.addproductUrl +'update_stock',formData)
  }

}

