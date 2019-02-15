import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './services/login.services';
import { Router } from '@angular/router';

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

  constructor(private httpClient: HttpClient, 
              private logiService: LoginService,
              private router: Router){}

  handleRealizarLogin(evento: Event, formLogin:NgForm){

    evento.preventDefault();

    if (formLogin.valid){
      
      console.log(this.login);

      const dadosDTO = {
        email: this.login.email,
        password: this.login.senha,
      };   

      this.logiService.logarUsuario(dadosDTO)
      .subscribe(({}) => {
          this.router.navigate(['/inbox']);
      })
    }
    else{
      console.log('Forçar todos os campos')
    }

    this.login = {
      email: '',
      senha: '',
    };

      formLogin.reset();

  }

}
