import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

const routes: Routes = [
  {path: '', component: HomeComponent , pathMatch: 'full'},
  {path: 'Sign In', component: SigninComponent , pathMatch: 'full'},
  {path: 'Sign up', component: SignupComponent , pathMatch: 'full'},
  {path: 'Cart', component: CartComponent , pathMatch: 'full'},
  {path: 'Admin/:id', component: GoodsComponent , pathMatch: 'full'},
  {path: 'Admin', component: GoodsComponent , pathMatch: 'full'},
  {path: 'Add', component: AddproductComponent , pathMatch: 'full'},
  {path: '**', component: NotFoundComponent , pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
