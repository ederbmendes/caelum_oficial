import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  formCadastro: FormGroup;

  constructor() { 

    this.formCadastro = new FormGroup({
      nome: new FormControl('Dados inicia'),
      email: new FormControl('email')
    });

  }


}
