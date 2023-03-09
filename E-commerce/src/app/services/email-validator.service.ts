import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {
 common_url = "http://127.0.0.1:8000/common/"
  
  constructor(private http:HttpClient) { }
  formData = new FormData()
  s_email_check(email:any):Observable<any>{
    this.formData.append('email',email)
    return this.http.post(this.common_url+'s_email_check',this.formData)
  }
}
