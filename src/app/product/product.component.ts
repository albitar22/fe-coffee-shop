import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product/product.service';


@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  errorMessage: string | null = null;

  constructor(private productService: ProductService) {}

  async ngOnInit() {
    try {
      await this.getProducts();
    } catch (error) {
      this.handleError('Failed to fetch products. Please try again.');
    }
  }

  getProducts(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const subscription = this.productService.getProducts().subscribe({
        next: (products: any[]) => {
          this.products = products;
          this.errorMessage = null;
          resolve(products);
        },
        error: (error: any) => {
          this.products = [];
          reject(error);
        }
      });

      subscription.unsubscribe();
    });
  }
  
  

  addProduct(product: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.productService.addProduct(product).subscribe({
        next: () => {
          this.getProducts().then(resolve).catch(reject);
          this.errorMessage = null;
        },
        error: (error: any) => {
          reject(error);
          this.handleError('Failed to add product. Please try again.');
        }
      });
    });
  }
  

  updateProduct(productId: string, updatedProduct: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.productService.updateProduct(Number(productId), updatedProduct).subscribe({
        next: () => {
          this.getProducts().then(resolve).catch(reject);
          this.errorMessage = null;
        },
        error: (error: any) => {
          reject(error);
          this.handleError('Failed to update product. Please try again.');
        }
      });
    });
  }
  
  deleteProduct(productId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.productService.deleteProduct(Number(productId)).subscribe({
        next: () => {
          this.getProducts().then(resolve).catch(reject);
          this.errorMessage = null;
        },
        error: (error: any) => {
          reject(error);
          this.handleError('Failed to delete product. Please try again.');
        }
      });
    });
  }
  

  handleError(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
