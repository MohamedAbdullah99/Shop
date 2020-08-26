import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(public productServ:ShopService, public router:Router ) {
    
  }

  ngOnInit(): void {
  }

  saveData(name, urlImg , description, price) {
    this.productServ.saveData(name.value, urlImg.value , description.value, price.value)
    this.router.navigate(['/'])
  }

}
