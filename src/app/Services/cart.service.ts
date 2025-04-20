import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartItem } from 'src/app/Models/cart-item';
import { Products } from 'src/app/Models/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.loadCartFromLocalStorage());
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    // Save any change to localStorage
    this.cartItems$.subscribe(items => {
      this.saveCartToLocalStorage(items);
    });
  }

  /** Add product to cart, or update quantity if it already exists */
  addToCart(product: Products, quantity: number ) {
    const items = this.cartItemsSubject.value;
    const existingIndex = items.findIndex(item => item.product?.id === product.id);

    if (existingIndex >= 0) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({ product, quantity });
    }

    this.cartItemsSubject.next([...items]);
  }

  /** Remove item by product ID */
  removeFromCart(productId: number) {
    const updatedItems = this.cartItemsSubject.value.filter(item => item.product?.id !== productId);
    this.cartItemsSubject.next(updatedItems);
  }

  /** Clear all cart */
  clearCart() {
    this.cartItemsSubject.next([]);
  }

  /** Total price calculation */
  getTotalPrice(): number {
    return this.cartItemsSubject.value.reduce((total, item) => {
      return total + item.product?.price * item.quantity;
    }, 0);
  }
  getItems(): Products[] {
    return this.cartItemsSubject.value.map(item => item.product);
  }
  
  
  /** Count of all items */
  getTotalQuantity(): number {
    return this.cartItemsSubject.value.reduce((sum, item) => sum + item.quantity, 0);
  }

  /** Observable: is cart empty */
  isEmptyCart() {
    return this.cartItems$.pipe(map(items => items.length === 0));
  }

  // 🔐 LocalStorage Integration
  private saveCartToLocalStorage(cart: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  private loadCartFromLocalStorage(): CartItem[] {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  }
}
