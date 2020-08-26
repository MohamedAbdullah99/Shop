import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpen:boolean = false

  onClick() {
    this.isOpen = !this.isOpen
  }

  constructor() { }

  ngOnInit(): void {
  }

}
