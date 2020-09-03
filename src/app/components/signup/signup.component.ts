import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private as:AuthService) { }

  ngOnInit(): void {
  }

  signUp(form) {
    let data:User = form.value
    this.as.signup(data.email,data.password)
  }

}
