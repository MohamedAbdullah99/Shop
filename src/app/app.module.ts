import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsComponent } from './components/goods/goods.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    SigninComponent,
    SignupComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AddproductComponent,
    SummaryPipe,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDSgrud7qWdKDStYvk8FodAR2cAiCXxvqs",
        authDomain: "my-project-1538550441678.firebaseapp.com",
        databaseURL: "https://my-project-1538550441678.firebaseio.com",
        projectId: "my-project-1538550441678",
        storageBucket: "my-project-1538550441678.appspot.com",
        messagingSenderId: "11115983036",
        appId: "1:11115983036:web:5df907ed4b54ad7979e0b9",
        measurementId: "G-4P6NG2ZYNZ"
      }
    ),
    AngularFireAuthModule,
    HttpClientModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
