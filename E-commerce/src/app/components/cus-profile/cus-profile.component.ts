import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cus-profile',
  templateUrl: './cus-profile.component.html',
  styleUrls: ['./cus-profile.component.css']
})
export class CusProfileComponent {
  subbtn = true
  inptag = true
  c_id:any;
  cid:any;
  cdetails:any;
  btnedit(){
    
      this.subbtn=false
      this.inptag=false     
}

constructor (private service:CustomerService){}
ngOnInit(){
  this.c_id = localStorage.getItem('C-token')
  this.cid = new FormData()
  this.cid.append('cid',this.c_id)
  this.service.cusProfile(this.cid).subscribe((res:{cdetails:any})=>{
    this.cdetails = res.cdetails
    console.log(this.cdetails)

  })

}
}
