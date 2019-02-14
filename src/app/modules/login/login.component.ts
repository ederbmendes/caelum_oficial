import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  login = {
    email: '',
    senha: '',
  }

  handleRealizarLogin(evento: Event, formLogin:NgForm){

    evento.preventDefault();

    if (formLogin.invalid) return;
    
    console.log(this.login);
  
    this.login = {
      email: '',
      senha: '',
    };

    formLogin.reset();

  }

}
