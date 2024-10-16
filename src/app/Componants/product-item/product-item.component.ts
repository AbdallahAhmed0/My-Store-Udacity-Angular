import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { CartService } from 'src/app/Services/cart.service';
import * as bootstrap from 'bootstrap'; // Import Bootstrap

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
quantity:number = 1;  
@Input() prd!: Products;
  constructor(private router:Router,
              private cartSer:CartService) { 
              }
  

ngOnInit(): void {

}

prdItem(id:number){

this.router.navigate([`/product/${id}`]);
}

addToCart(prd:Products,count:string){
  prd.amount=count;
  this.quantity = +count;
  this.cartSer.addToCart(prd,+count);
      // Show the success modal
      const modalElement = document.getElementById('successModal') as HTMLElement;
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      } else {
        console.error('Modal element not found');
      }
    }

}
