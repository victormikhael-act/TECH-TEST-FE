import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message!:string;
  data = {
    USERNAME :'',
    PASSWORD : ''
  };
  
  showAlertPass = false;

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.showAlertPass = false;
  }

  login() {
    this.showAlertPass = false;
    if (this.data.PASSWORD.length < 8 ){
      this.showAlertPass = true
      return;
    }
    console.log('login clicked...');
    console.log(this.data.USERNAME);
    console.log(this.data.PASSWORD);
    this.router.navigate(['/emp']);
  }
}
