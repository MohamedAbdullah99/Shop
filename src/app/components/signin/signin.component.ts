import { Component, OnInit } from '@angular/core';
import {AuthService } from 'src/app/services/auth.service'
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLogdIn = false
  constructor(private as: AuthService ) { }

  ngOnInit() : void {
  }

  signIn(form) {
    let data = form.value
    this.as.signin(data.user_name,data.password).then( response => {
      this.isLogdIn = true;
      console.log(form.value)
    })
    
  }

}
