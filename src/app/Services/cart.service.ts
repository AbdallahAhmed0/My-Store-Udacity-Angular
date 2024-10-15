import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from 'src/app/Models/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  isEmpty=new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient
  ){}

  prd:Products[]=[];
  countOfPrd:number[]=[];
  totalPrice:number=0;
  
  addToCart(product:Products,count:number) {
    this.prd.push(product);
    this.countOfPrd.push(count);
    this.isEmpty.next(true);
  }

  getItems() {
    return this.prd;
  }
get isEmptyCart(){
  return this.isEmpty.asObservable();
  }

  totalPriceOfCart():number{
    this.totalPrice=0;
    let i=0;
  for(let prd of this.prd){
     this.totalPrice += prd.price * this.countOfPrd[i];
    i++;
  }
  return this.totalPrice;
}

  
}