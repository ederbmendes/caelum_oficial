import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  formCadastro: FormGroup;

  constructor() { 

    this.formCadastro = new FormGroup({
      nome: new FormControl('Dados inicia', [Validators.required]),
      email: new FormControl('email', [Validators.required])
    });

  }


}
