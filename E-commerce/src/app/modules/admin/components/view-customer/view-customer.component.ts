import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent {
  customer_deatils:any;
 constructor(private service:AdminService){}


 ngOnInit(){
  this.service.viewCustomer().subscribe((res:{customer_deatils:any})=>{
    console.log(res.customer_deatils)
   this.customer_deatils =  res.customer_deatils
  })
 }
}

