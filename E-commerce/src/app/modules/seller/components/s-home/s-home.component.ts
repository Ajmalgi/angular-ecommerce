import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-s-home',
  templateUrl: './s-home.component.html',
  styleUrls: ['./s-home.component.css']
})
export class SHomeComponent {
  constructor(private service:SellerService){}
  seller_name: any
  seller_id : any;
  Sid = new FormData() 
  Sproducts : any;
ngOnInit(){

  this.seller_name = localStorage.getItem('seller_name')
  
  this.seller_id = localStorage.getItem('token')
  this.Sid.append('Sid',this.seller_id)
  
  this.service.Sview_products(this.Sid).subscribe((res:{products:any})=>{
    this.Sproducts = res.products
    console.log(this.Sproducts)
  })
}


}
