import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-approve-seller',
  templateUrl: './approve-seller.component.html',
  styleUrls: ['./approve-seller.component.css']
})
export class ApproveSellerComponent {
  seller_details:any;
  formdata = new FormData;
constructor(private service:AdminService){}

 ngOnInit(){
  this.service.viewSeller().subscribe((res:{seller_details:any})=>{
    console.log(res.seller_details)
   this.seller_details =  res.seller_details
  })
 }

 submit(Sid:any,status:string){
  this.formdata.append('Sid',Sid)
  this.formdata.append('status',status)
  this.service.approve_seller(this.formdata).subscribe((res:{msg:any})=>{
   
  })
  
 }
}

