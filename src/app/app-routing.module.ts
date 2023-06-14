import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  
  { path: '', component: HomePageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'menu', component: MenuComponent},
  {
    path: 'product/:categoryName',
    component: ProductDetailsComponent
  },
  { path: 'admin', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
