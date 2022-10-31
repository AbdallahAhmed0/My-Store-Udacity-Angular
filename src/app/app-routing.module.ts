import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Componants/cart/cart.component';
import { ConfirmationComponent } from './Componants/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './Componants/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './Componants/product-list/product-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products',component:ProductListComponent},
  {path:'product/:id',component:ProductItemDetailComponent},
  {path:'cart',component:CartComponent},
  {
    path: 'success/:name/:totalPrice',
    component: ConfirmationComponent
  },  
  {path:'**',component:ProductListComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
