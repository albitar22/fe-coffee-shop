import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/cart/');
  }
  
/*addToCart(product: Product): Observable<any> {
    return this.http.post('http://localhost:8080/cart/', product);
  }*/

 /* async addToCart(product: Product): Promise<any> {
    try {
      const response = await this.http.post('http://localhost:8080/cart/', product).toPromise();
      return response;
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        console.error(`HTTP error occurred: ${error.status}`);
      } else {
        console.error('An error occurred:', error);
      }
      throw error;
    }
  }*/

  removeFromCart(itemId: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/cart/${itemId}`);
  }

  getCartTotal(): Observable<number> {
    return this.http.get<number>('http://localhost:8080/cart/total');
  }
}
