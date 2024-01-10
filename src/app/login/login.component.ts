import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  isLoading: boolean = false;
  isLoggedIn: boolean = false;
  

  login() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoggedIn = true;
    }, 3000); 
  }
  


}
