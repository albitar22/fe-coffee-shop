import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
  newProduct = {
    name: '',
    price: 0,
    description: ''
  };

  constructor(private productService: ProductService) { }

  addProduct() {
    this.productService.addProduct(this.newProduct);
    this.resetForm();
  }

  resetForm() {
    this.newProduct = {
      name: '',
      price: 0,
      description: ''
    };
  }
}