import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 
import { Products } from 'src/app/Models/products';
import { CartService } from 'src/app/Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  products!: Products[];
  totalPrice!: number;
  @Output() userInfo = new EventEmitter();

  constructor(private cartSer: CartService,
              private router: Router) { 
    this.totalPrice = this.cartSer.getTotalPrice();
  }

  ngOnInit(): void {
    this.products = this.cartSer.getItems();
  }

  quantityChanged(count: string) {
    this.totalPrice = 0;
    for (let prd of this.products) {
      this.totalPrice += prd.price * +count;
    }
  }

  // Method to remove product from the cart
  deleteProduct(product: Products) {
    this.products = this.products.filter(p => p !== product);  // Remove product from array
    this.totalPrice = this.cartSer.getTotalPrice();
    this.cartSer.removeFromCart(product.id);  // Update cart in service
  }

  onSubmit(value: any) {
    this.router.navigate([`success/${value.name}/${this.totalPrice}`]);
  }
  goToShop() {
    this.router.navigate(['/products']); // Adjust the path to match your product page route
}

}
