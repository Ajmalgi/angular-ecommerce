import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  message:any;
  msg:any;
  
constructor(private service:SellerService){}

submit(formdata:any){
  console.log(formdata)
  
  let id =parseInt(localStorage.getItem('token')!)

  this.service.change_Password(formdata,id).subscribe((res:{msg:string})=>{
   this.message = res.msg
  })
  if (this.message=='successfully password changed'){
    var msg = true
      
      
      
  }
}
}
