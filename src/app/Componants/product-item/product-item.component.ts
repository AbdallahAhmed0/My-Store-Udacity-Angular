import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { ProductsService } from 'src/app/Services/products.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  
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
  this.cartSer.addToCart(prd,+count);
}

}
