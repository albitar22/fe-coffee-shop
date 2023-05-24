import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: { name: string, email: string } | null = null; // Placeholder for user data
  orders: string[] = []; // Placeholder for user orders
  cartItems: string[] = []; // Placeholder for cart items

  constructor() { }

  ngOnInit(): void {
    // Fetch user data from your backend or a service
    this.user = {
      name: 'John Doe',
      email: 'johndoe@example.com'
    };

    // Fetch user orders from your backend or a service
    this.orders = ['Order 1', 'Order 2', 'Order 3'];

    // Fetch cart items from your backend or a service
    this.cartItems = ['Item 1', 'Item 2', 'Item 3'];
  }
}
