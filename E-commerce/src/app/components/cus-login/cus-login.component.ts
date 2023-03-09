import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cus-login',
  templateUrl: './cus-login.component.html',
  styleUrls: ['./cus-login.component.css']
})
export class CusLoginComponent {
constructor(private service:CustomerService, private router:Router){}
submit(formdata : any){
  console.log(formdata)

  this.service.customerLogin(formdata).subscribe((res:{statusCode:number,C_token:string,cname:string})=>{
    console.log(res.statusCode)
    if(res.statusCode == 200){
      localStorage.setItem('C-token',res.C_token)
      localStorage.setItem('customer_name',res.cname)
      this.router.navigate(['/home'])
    }
    
  })
}



}
