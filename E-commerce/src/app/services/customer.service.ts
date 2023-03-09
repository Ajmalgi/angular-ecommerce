import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  customerUrl = "http://127.0.0.1:8000/common/"

  constructor(private http:HttpClient) { }
  

  addCustomer(formData:any):Observable<any>{

    return this.http.post(this.customerUrl+'customer_reg',formData)
  }

  customerLogin(formData:any):Observable<any>{
    return this.http.post(this.customerUrl+'customer_login',formData)
  }
  

  homeCategory():Observable<any>{

    return this.http.get(this.customerUrl+'home_category')
  }
  
  disProducts(cid:any):Observable<any>{
   
    return this.http.post(this.customerUrl+'view_products',cid)
  }

  cusProfile(cid:any):Observable<any>{
    return this.http.post(this.customerUrl+'customer_profile',cid)
  }

  product_details(id:any):Observable<any>{
    return this.http.get(this.customerUrl+'product_details/'+id)
  }

  addto_cart(formData:any):Observable<any>{
    return this.http.post(this.customerUrl+'addto_cart',formData)
  }
  
  my_cart(formData:any):Observable<any>{
    return this.http.post(this.customerUrl+'my_cart',formData)
  }

  remove_cart_item(cart_id:any):Observable<any>{
    return this.http.post(this.customerUrl+'remove_cart_item',cart_id)
  }
  
}
