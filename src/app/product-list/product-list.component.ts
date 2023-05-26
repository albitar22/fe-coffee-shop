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
  products: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId') || '';
      this.categoryName = this.getCategoryName(this.categoryId);
      this.fetchProducts();
    });
  }

  fetchProducts() {
  }

  getCategoryName(categoryId: string): string {
    return 'Category Name';
  }
}
