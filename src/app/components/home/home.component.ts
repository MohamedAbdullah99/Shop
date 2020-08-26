import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public productServ:ShopService) {}

  ngOnInit(): void {
  }

  deleteProduct(i) {
    this.productServ.deleteProduct(i)
  }



}
