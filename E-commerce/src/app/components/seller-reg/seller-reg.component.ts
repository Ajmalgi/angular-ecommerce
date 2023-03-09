import { Component } from '@angular/core';
import {   FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/services/email-validator.service';
import { SellerService } from 'src/app/services/seller.service';
import { EmailValidator } from 'src/app/validation/email.validator';


@Component({
  selector: 'app-seller-reg',
  templateUrl: './seller-reg.component.html',
  styleUrls: ['./seller-reg.component.css']
})
export class SellerRegComponent {

  constructor(private service: SellerService, private emailservice:EmailValidatorService){}  
  seller_pic : any;
   formData = new FormData();
  onImageChanged(event:any){
  this.seller_pic = event.target.files[0]
  }
  message:string = ""
 



    seller_reg= new FormGroup({
      email:new FormControl('',Validators.required,EmailValidator.createValidator(this.emailservice)),
      first_name: new FormControl("",[Validators.required]),
      last_name: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required]),
      bank_name: new FormControl("",[Validators.required]),
      branch: new FormControl("",[Validators.required]),
      ifsc: new FormControl("",[Validators.required]),
      account_no: new FormControl("",[Validators.required]),
      seller_pic:new FormControl(null)
      

    })

    // get first_name(){
    //   return this.seller_reg.get("first_name")
    // }
    
    // get last_name(){
    //  return this .seller_reg.get("last_name")
    // }
    // get phone(){
    //  return this .seller_reg.get("phone")
    // }
   
    // get address(){
    //  return this.seller_reg.get("address")
    // }

    // get bank_name(){
    //  return this.seller_reg.get("bank_name")
    // }

    // get branch(){
    //  return this.seller_reg.get("branch")
    // }

    // get ifsc (){
    //  return this.seller_reg.get("ifsc")
    // }

    // get account_no (){
    //  return this.seller_reg.get("account_no")
    // }
   

    submit() {

     
      this.formData.append('seller_pic', this.seller_pic);

      this.formData.append('email', this.seller_reg.get('email')?.value ?? '');
      this.formData.append('first_name', this.seller_reg.get('first_name')?.value ?? '');
      this.formData.append('last_name', this.seller_reg.get('last_name')?.value ?? '');
      this.formData.append('phone', this.seller_reg.get('phone')?.value ?? '');
      this.formData.append('address', this.seller_reg.get('address')?.value ?? '');
      this.formData.append('bank_name', this.seller_reg.get('bank_name')?.value ?? '');
      this.formData.append('branch', this.seller_reg.get('branch')?.value ?? '');
      this.formData.append('ifsc', this.seller_reg.get('ifsc')?.value ?? '');
      this.formData.append('account_no', this.seller_reg.get('account_no')?.value ?? '');
      this.formData.append('seller_pic', this.seller_pic ?? '');
      
     console.log(this.formData)
     this.service.seller_reg(this.formData).subscribe((res:{message:any})=>{
      console.log(res.message)
     })
     
    }
  
   
}
