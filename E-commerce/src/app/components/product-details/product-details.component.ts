import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  constructor(private activatedRoute : ActivatedRoute ,
     private service:CustomerService,
     private router:Router){}
   id:any;
   product_deatails:any;
   formdata = new FormData()
   cid:any;
   msg:any;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(typeof(this.id))
    
    this.service.product_details(this.id).subscribe((res:{product_details:any})=>{
      this.product_deatails = res.product_details
      console.log(this.product_deatails)
    })
  }

  submit(){
    
    this.cid = localStorage.getItem('C-token')
    this.formdata.append('cid',this.cid)
    this.formdata.append('pid',this.id)
    this.service.addto_cart(this.formdata).subscribe((res:{msg:any})=>{
    if (res.msg == 200){
      this.router.navigate(['/cart'])
    }
    else{
      this.msg = res.msg
    }
    
    })
  
  }



}
