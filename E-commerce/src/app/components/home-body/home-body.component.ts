import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent {
  category : any;
  constructor(private service: CustomerService, private router: Router){}

ngOnInit(){
  this.service.homeCategory().subscribe((res:{category:any})=>{
    this.category = res.category
    console.log(this.category)
  })
}

getId(category_id:any) {
  localStorage.setItem('category-id',category_id)
  this.router.navigate(['/products'])
}


}
