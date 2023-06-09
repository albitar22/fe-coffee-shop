import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems() {
    return this.http.get<Product[]>('http://localhost:8080/cart');
  }

  addToCart(product: Product) {
    return this.http.post('http://localhost:8080/cart', product);
  }

  removeFromCart(itemId: number) {
    return this.http.delete(`http://localhost:8080/cart/${itemId}`);
  }

  getCartTotal() {
    return this
  }
}

