import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {

constructor(private service: SellerService,private router: Router){}
message : number = 0
Sid:any;
submit(formdata :any){
  // console.log(formdata)



  this.service.seller_login(formdata).subscribe((res:{statusCode:number,token:number,sname:string,Sid:any})=>{
    
    if(res.statusCode == 200){
      localStorage.setItem('token',res.token.toString())
      localStorage.setItem('seller_name',res.sname)
      this.router.navigate(['seller/home'])
    }
    
  })
}
}
