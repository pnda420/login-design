import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  isLoading: boolean = false;
  isLoggedIn: boolean = false;
  isWrong: boolean = false;
  

  login() {
    this.isWrong = true
    this.isLoading = true;
    setTimeout(() => {
      this.isLoggedIn = true;
    }, 3000); 
    
    setTimeout(() => {
      window.location.href = 'https://www.xpnda.de';
    }, 3500); 
  }
  


}
