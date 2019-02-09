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
      nome: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required])
    });

  }

  handleCadastroUsuario(){
    console.log('asdasd')
    if(this.formCadastro.valid){
      console.log('Manda para o banco de dados');
    }
    else{
      const campos = this.formCadastro.controls;
      Object.keys(campos).forEach(function(controlNameCampoAtual){
          campos[controlNameCampoAtual].markAsTouched({onlySelf: true})
      })
    }

  }

}
