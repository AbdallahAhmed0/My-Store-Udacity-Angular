import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit,OnDestroy {

  currPrdId:number= 0;
  product!:Products;

  prds:Products[]=[];
  @Output()prdCart:EventEmitter<Products[]>;

  sub!:Subscription;

  constructor(private productService:ProductsService,
              private activateRoute:ActivatedRoute,
              private cartSer:CartService) { 

            this.prdCart= new EventEmitter<Products[]>();
          
          }
 
  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((paramMap)=>{

      this.currPrdId=Number(paramMap.get('id'));  

      
     this.sub=this.productService.getAllProducts().subscribe(data => {
          this.prds=data;
          this.product=this.getProductDetails(this.currPrdId);
          
     });
     })
    
  }
  getProductDetails(id: number) {
    return this.prds.filter((item) => item.id === id)[0];
  }
  
  addToCart(prd:Products,count:string){
    prd.amount=count;
    this.cartSer.addToCart(prd,+count);
  }

  ngOnDestroy(): void {

    this.sub.unsubscribe();
  }

}
