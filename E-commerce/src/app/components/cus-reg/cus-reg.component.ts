import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cus-reg',
  templateUrl: './cus-reg.component.html',
  styleUrls: ['./cus-reg.component.css']
})
export class CusRegComponent {

  constructor(private service: CustomerService){}
  customer_pic : any;
  onImageChanged(event:any){
  this.customer_pic = event.target.files[0]
  }

  message:string =""

  submit(formdata : any){
  // console.log(formdata)
  const customerData = new FormData()
  customerData.append('first_name',formdata['first_name'])
  customerData.append('last_name',formdata['last_name'])
  customerData.append('email',formdata['email'])
  customerData.append('phone',formdata['phone'])
  customerData.append('address',formdata['address'])
  customerData.append('password',formdata['password'])
  customerData.append('customer_pic',this.customer_pic)


  this.service.addCustomer(customerData).subscribe((res:{message:string,status:number})=>{
    console.log(res)
    this.message = res.message
  })
  
  
}


}
