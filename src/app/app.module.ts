import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CartService } from './services/cart.service';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { RouterModule } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { MatMenuModule } from '@angular/material/menu';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    ProductComponent,
    AppComponent,
    HomePageComponent,
    ProductDetailsComponent,
    ProfileComponent,
    AdminDashboardComponent,
    CartComponent,
    ProductListComponent,
    ContactUsComponent,
    AddNewProductComponent,
    AboutUsComponent
  ],
  imports: [
    MenuComponent,
    MatMenuModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule,
    CurrencyPipe,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ProductCategoryComponent
  ],

  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
