import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  categoryId!: string;
  categoryName!: string;
  products: any[] = []; // Define the products property and initialize it as an empty array

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId') || '';
      this.categoryName = this.getCategoryName(this.categoryId);
      this.fetchProducts();
    });
  }

  fetchProducts() {
    // Fetch products based on categoryId
    // Assign the fetched products to the 'products' array
  }

  getCategoryName(categoryId: string): string {
    // Perform the necessary logic to retrieve the category name based on the categoryId
    // Replace this with your own implementation
    return 'Category Name';
  }
}
