import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login';


@Component({
  selector: 'app-login-model',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.css']
})
export class LoginModelComponent implements OnInit {
  loginModel:Login = {} as any;  

  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.loginModel);
  }

}
