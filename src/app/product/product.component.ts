import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  errorMessage: string | null = null;

  constructor(private productService: ProductService) { }

  async ngOnInit() {
    try {
      await this.getProducts();
    } catch (error) {
      this.handleError('Failed to fetch products. Please try again.');
    }
  }

  getProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.productService.getProducts().subscribe(
        (products: any[]) => {
          this.products = products;
          this.errorMessage = null;
          resolve(undefined);
        },
        (error: any) => {
          this.products = [];
          reject(error);
        }
      );
    });
  }

  addProduct(product: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.productService.addProduct(product).subscribe(
        () => {
          this.getProducts().then(resolve).catch(reject);
          this.errorMessage = null;
        },
        (error: any) => {
          reject(error);
          this.handleError('Failed to add product. Please try again.');
        }
      );
    });
  }

  updateProduct(productId: string, updatedProduct: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.productService.updateProduct(Number(productId), updatedProduct).subscribe(
        () => {
          this.getProducts().then(resolve).catch(reject);
          this.errorMessage = null;
        },
        (error: any) => {
          reject(error);
          this.handleError('Failed to update product. Please try again.');
        }
      );
    });
  }

  deleteProduct(productId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.productService.deleteProduct(Number(productId)).subscribe(
        () => {
          this.getProducts().then(resolve).catch(reject);
          this.errorMessage = null;
        },
        (error: any) => {
          reject(error);
          this.handleError('Failed to delete product. Please try again.');
        }
      );
    });
  }

  handleError(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
