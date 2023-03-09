import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

   adminUrl = "http://127.0.0.1:8000/ang_eco_admin/"

  constructor(private http:HttpClient) { }

  addCategory(formData:any):Observable<any>{

    return this.http.post(this.adminUrl+'add_category',formData)
  }

  viewCategory():Observable<any>{

    return this.http.get(this.adminUrl+'view_category')
  }

  viewCustomer():Observable<any>{

    return this.http.get(this.adminUrl+'view_customer')
  }

  viewSeller():Observable<any>{

    return this.http.get(this.adminUrl+'view_seller')
  }

  approve_seller(formData:any):Observable<any>{

    return this.http.post(this.adminUrl+'approve_seller',formData)
   
  }



  

}
