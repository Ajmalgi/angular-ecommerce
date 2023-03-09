
import { ChangeDetectorRef, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart_items: any[] = [];
  productTotal = 0;
  formdata = new FormData()
  Cid: any;

  totalAmtValue: number = 0;

  totalQtyValue: number = 0;
  cart_id = new FormData()

  constructor(private service: CustomerService, private cdRef: ChangeDetectorRef, private router: Router) {
    this.amtDivs = new QueryList<ElementRef<any>>();
  }

  ngOnInit() {

    this.loadCart()

  }

  loadCart() {
    this.Cid = localStorage.getItem('C-token')
    this.formdata.append('Cid', this.Cid)
    this.service.my_cart(this.formdata).subscribe((res: { cart_items: any }) => {

      this.cart_items = res.cart_items
      for (let item of this.cart_items) {
        this.totalAmtValue += item.product.price
      }

    })
  }

  @ViewChildren('amtDiv') amtDivs: QueryList<ElementRef>;
  ngAfterViewInit() {
    console.log(this.cart_items)
    this.amtDivs.forEach((amtDiv: ElementRef) => {
      console.log('Getting hr')
      const amtValue = amtDiv.nativeElement.querySelector('p.amt').textContent;
      console.log(amtValue, 'amount')
      this.productTotal += parseFloat(amtValue);
    });
    console.log(this.productTotal, 'jh')
    this.Cid = localStorage.getItem('C-token')
    this.formdata.append('Cid', this.Cid)

  }

  updateTotalAmtValue(): any {
    let totalAmtValue = 0;
    this.amtDivs.forEach((amtDiv: ElementRef) => {
      const amtValue = amtDiv.nativeElement.querySelector('p.amt').textContent;
      totalAmtValue += parseFloat(amtValue);
    });
    this.totalAmtValue = totalAmtValue; // assign the value to the public property
    // manually trigger change detection to update the template
    console.log(this.totalAmtValue)
    return totalAmtValue

  }

  updateTotalQtyValue(): number {
    let totalQty = 0;
    const qtyInputs: HTMLInputElement[] = Array.from(document.getElementsByClassName('qty')) as HTMLInputElement[];
    qtyInputs.forEach((qtyInput: HTMLInputElement) => {
      const qtyValue = parseFloat(qtyInput.value);
      totalQty += isNaN(qtyValue) ? 0 : qtyValue;
    });
    return totalQty;

  }

  removecart(cartid: any, productprice: any) {
    console.log(cartid)
    this.cart_id.append('cartid', cartid)
    this.service.remove_cart_item(this.cart_id).subscribe((res: { statusCode: any, cart_id: any }) => {
      console.log(res.statusCode)
      const index = this.cart_items.findIndex((item: { id: any; }) => item.id == res.cart_id);
      if (index !== -1) {
        this.cart_items.splice(index, 1);

        this.totalAmtValue = this.totalAmtValue - parseInt(productprice)

      }
      if (this.cart_items.length === 0) {
        this.totalAmtValue = 0

      }

    })
  }
}











