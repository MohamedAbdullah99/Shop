import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogIn = false

  constructor(public afAuth : AngularFireAuth) { }

  async signup(email, password) {
    await this.afAuth.createUserWithEmailAndPassword(email,password).then( response => {
      this.isLogIn = true;
      localStorage.setItem('user',JSON.stringify(response.user))
    } )
  }

  async signin(email, password) {
    await this.afAuth.signInWithEmailAndPassword(email,password).then( response => {
      this.isLogIn = true;
      localStorage.setItem('user',JSON.stringify(response.user))
    } )
  }

  logOut() {
    this.afAuth.signOut();
    localStorage.removeItem('user')
  }

}
