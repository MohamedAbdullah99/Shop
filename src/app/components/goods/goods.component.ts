import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
 
  productId;
  product;

  constructor(private route:ActivatedRoute, private productServ:ShopService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')
    this.product = this.productServ.products[this.productId]
  }

}
