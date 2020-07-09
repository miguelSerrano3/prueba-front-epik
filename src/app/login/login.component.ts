import { login } from './models/login';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  restLogin = {
    IdError:'',
    Mensaje: null
  };

  login:login={
    Email:'',
    Password:''
  };

  constructor( 
    public loginService : LoginService,
    public router : Router
    ) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.loginService.setLogin(this.login).subscribe(
      rest=>{
        this.restLogin = rest
        if(!this.restLogin.IdError){
          this.router.navigate(['/dashboard/personajes']);
        }
      },
      error=>{
        console.log(error);
      }
    );
  }

}
