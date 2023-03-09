import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products : any;
  constructor(private service: CustomerService){}
  category:any;
  cid : any;

ngOnInit(){
 
this.category=localStorage.getItem('category-id')
this.cid = new FormData()
this.cid.append('cid',this.category)
this.service.disProducts(this.cid).subscribe((res:{products:any})=>{
this.products = res.products
console.log(this.products)
 
})
}



}
