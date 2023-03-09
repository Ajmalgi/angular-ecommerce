import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-seller',
  templateUrl: './view-seller.component.html',
  styleUrls: ['./view-seller.component.css']
})
export class ViewSellerComponent {
  seller_details:any;
  constructor(private service:AdminService){}


  
 ngOnInit(){
  this.service.viewSeller().subscribe((res:{seller_details:any})=>{
    console.log(res.seller_details)
   this.seller_details =  res.seller_details
  })
 }
}
