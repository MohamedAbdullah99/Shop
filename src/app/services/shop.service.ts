import { Injectable } from '@angular/core';
import { inerProduct } from '../interfaces/good.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  products:Array<inerProduct> = [
    {name: "tv", urlImg: "./assets/1.jpg", price: 99, description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "},
    {name: "tv", urlImg: "./assets/1.jpg", price: 99, description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "},
    
  ]

  constructor() { }

  deleteProduct(i) {
    this.products.splice(i, 1)
  }

  saveData(name, urlImg , description, price) {
    this.products.push({
      name,
      urlImg,
      description,
      price
    })
  }
}
