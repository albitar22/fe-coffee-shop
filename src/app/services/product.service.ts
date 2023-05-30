import { Injectable } from '@angular/core';  
import { Product } from '../models/product';  
  
  
@Injectable({  
  providedIn: 'root'  
})  
export class ProductService {  
  productList: Array<Product> = ([  
    { id: 1, name: 'coffee1', price: 12000, description: 'New Mobile', quantity: 2 },  
    { id: 2, name: 'coffee2', price: 30000, description: 'New Computer',quantity: 4 },  
    { id: 3, name: 'coffee3', price: 800, description: 'New Cabinet' ,quantity: 1},  
    { id: 4, name: 'coffee4', price: 1000, description: 'New HDD', quantity: 2 }  
  
  ])  
  constructor() { }  
  get() {  
    return this.productList;  
  }  
}  