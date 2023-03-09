import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {
  catogery:any;
  constructor(private service: AdminService){}

 ngOnInit(){
  this.service.viewCategory().subscribe((res:{category:any})=>{
   this.catogery = res.category
   console.log(res)
   
  })
 }
 
}
