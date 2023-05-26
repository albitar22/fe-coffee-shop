import { Injectable } from '@angular/core';  
import { Product } from '../models/product';  
  
  
@Injectable({  
  providedIn: 'root'  
})  
export class ProductService {  
  productList: Array<Product> = ([  
    { id: 1, name: 'Mobile', price: 12000, description: 'New Mobile', quantity: 2 },  
    { id: 2, name: 'Computer', price: 30000, description: 'New Computer',quantity: 4 },  
    { id: 3, name: 'Cabinet', price: 800, description: 'New Cabinet' ,quantity: 1},  
    { id: 4, name: 'HDD', price: 1000, description: 'New HDD', quantity: 2 }  
  
  ])  
  constructor() { }  
  get() {  
    return this.productList;  
  }  
}  