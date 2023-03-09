import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private service: AdminService){}
  category_pic : any;
  onImageChanged(event:any){
    this.category_pic = event.target.files[0]
    }
    message : string =""
  submit(formdata : any){
    // console.log(formdata)
    const categoryData = new FormData()
    categoryData.append('category_name',formdata['category_name'])
    categoryData.append('category_des',formdata['category_des'])
    categoryData.append('category_image',this.category_pic)


    this.service.addCategory(categoryData).subscribe((res:{message:string})=>{
      console.log(res)
      this.message = res.message
    })
    }
}
