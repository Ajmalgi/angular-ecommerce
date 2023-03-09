import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product_pic : any
  token : any
  categorylist : any
  constructor(private service: SellerService,private selectCategory:CustomerService){}
  onImageChanged(event:any){
    this.product_pic = event.target.files[0]
    }

    ngOnInit(){
      this.token = localStorage.getItem('token')
      this.selectCategory.homeCategory().subscribe((res)=>{
        this.categorylist = res
        console.log(this.categorylist)
      })
    }

  submit(formdata : any){
    // console.log(formdata)

    const productData = new FormData()
    productData.append('product_name',formdata['product_name'])
    productData.append('category',formdata['category'])
    productData.append('product_no',formdata['product_no'])
    productData.append('price',formdata['price'])
    productData.append('product_des',formdata['product_des'])
    productData.append('stock',formdata['stock'])
    productData.append('product_image',this.product_pic)
    productData.append('seller',this.token)
  

    this.service.add_product(productData).subscribe((res:{statusCode:string})=>{
      console.log(res)
      
    })
    }
}
