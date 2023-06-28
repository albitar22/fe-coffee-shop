import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  
  { path: 'home', component: HomePageComponent },
  { path: 'us', component: AboutUsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'menu', component: MenuComponent},
  {
    path: 'product/:categoryName',
    component: ProductDetailsComponent
  },
  { path: 'admin', component: AdminDashboardComponent},
  {
    path: 'productList/:categoryName',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
