import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isEmptycart:boolean =false;

  constructor(private cartSer:CartService
              ) { }

  ngOnInit(): void {

  this.cartSer.isEmptyCart.subscribe(status => {
    this.isEmptycart=status;
  })
  
}
  
}
