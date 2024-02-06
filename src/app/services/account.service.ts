import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  login(Email:string,Password:string){
    console.log(Email);
    console.log(Password);
    localStorage.setItem('token',Math.random()+"")
  }

  logout(){
    localStorage.removeItem('token')
  }

  signup(){
    localStorage.setItem('token',Math.random()+"")
  }

  isLogged() {
    if(localStorage.getItem('token')){
      return true
    }
    return false
  }
}
