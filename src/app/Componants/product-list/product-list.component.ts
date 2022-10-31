import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './../../Services/products.service';
import { Products } from './../../Models/products';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,OnDestroy {

  sub!:Subscription;
  products:Products[]=[];

  constructor(private productsService:ProductsService) {

  }



ngOnInit(): void {
  
  this.sub = this.productsService.getAllProducts().subscribe(data =>{
    this.products=data;
  })
  
}
ngOnDestroy(): void {
  this.sub.unsubscribe();
}


}