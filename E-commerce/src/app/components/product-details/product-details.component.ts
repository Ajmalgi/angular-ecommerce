import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  constructor(private activatedRoute : ActivatedRoute){}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)
  }

}