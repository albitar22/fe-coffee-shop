import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Category {
  name: string;
  photoUrl: string;
}

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent {
  categories: Category[] = [
    { name: 'Arabica', photoUrl: '../../assets/category1.jpg' },
    { name: 'Robusta', photoUrl: '../../assets/category2.jpg' },
    { name: 'Excelsa', photoUrl: '../../assets/category3.jpg' },
    { name: 'Liberica', photoUrl: '../../assets/category4.jpg' }
  ];

  constructor(private router: Router) { }

  toTheProduct(category: Category) {
    this.router.navigateByUrl(`/product/${category.name}`);
  }
}
