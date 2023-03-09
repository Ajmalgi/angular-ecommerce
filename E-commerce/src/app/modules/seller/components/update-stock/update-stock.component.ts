import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent {
constructor(private service:SellerService){}
  seller_id : any;
  Sid = new FormData()
  s_products : any;
  updatedstock:any;
  upadateform = new FormData;
    submit(inputdata:any,product_id:any){

    console.log(inputdata)
    console.log(product_id)
    this.upadateform.append('inputdata',inputdata)
    this.upadateform.append('product_id',product_id)
    

        
    // this.seller_id = localStorage.getItem('token')
    // this.formdata.append('Sid',this.seller_id)
    // this.formdata.append('updatedstock',this.updatedstock)
    
    this.service.update_stock(this.upadateform).subscribe((res:{statusCode:any})=>{
      console.log(res.statusCode)
    })
   }

   ngOnInit(){

   
    
    this.seller_id = localStorage.getItem('token')
    this.Sid.append('Sid',this.seller_id)
    
    this.service.Sview_products(this.Sid).subscribe((res:{products:any})=>{
      this.s_products = res.products
      console.log(this.s_products)
    })
  }
  

  
}

