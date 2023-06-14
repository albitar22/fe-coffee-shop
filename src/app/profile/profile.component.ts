import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: { name: string, email: string } | null = null; 
  orders: string[] = []; 
  cartItems: string[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: 'John Doe',
      email: 'johndoe@example.com'
    };

    this.orders = ['Order 1', 'Order 2', 'Order 3'];
    this.cartItems = ['Item 1', 'Item 2', 'Item 3'];
  }
}
