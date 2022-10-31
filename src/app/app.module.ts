import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Componants/header/header.component';
import { CartComponent } from './Componants/cart/cart.component';
import { ConfirmationComponent } from './Componants/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './Componants/product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './Componants/product-item/product-item.component';
import { ProductListComponent } from './Componants/product-list/product-list.component';
import { UserInfoComponent } from './Componants/user-info/user-info.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemDetailComponent,
    ProductItemComponent,
    ProductListComponent,
    UserInfoComponent
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
