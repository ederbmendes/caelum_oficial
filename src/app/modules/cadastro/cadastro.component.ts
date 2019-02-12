import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  formCadastro: FormGroup;
  httpClient: HttpClient;

  constructor(paramhttpClient: HttpClient) { 

    this.httpClient = paramhttpClient;
    /*
    httpClient.head('https://avatars0.githubusercontent.com/u/45789091?s=400&u=724764bf62e4a3d08b861dd00f904a897d73087c&v=4', {observe: 'response'})
    .pipe(
        map(function(DadosServer){
          console.log("Dados do server", DadosServer)
          return DadosServer.status
        }),
        map(function(status){
            return "Status:" + status;
        })
    ).subscribe(function(DadosFluxo2){
        console.log("Alteração", DadosFluxo2)*/

    this.formCadastro = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(10)]),
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      senha: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this)),
      telefone: new FormControl('', [Validators.required, Validators.pattern("^[[0-9]{4}-[0-9]{4}")])
    });

  }

  //valida imagem... necessário o subscribe
  validaImagem(formControl){

    console.log('formControl', formControl)

    const evento = this.httpClient.head(formControl.value, {observe: 'response'})
    .pipe(
      map(function(dadosServer){
        const isValidImagem = dadosServer.headers.get('content-type').includes('jpeg');
        return isValidImagem ? null : {urlInvalida: true};
      }),
      catchError(function(error){
        console.log(error);
        return [{ urlInvalida: true }];
      })
    )
    return evento;
  }

  handleCadastroUsuario(){
    console.log('asdasd')
    if(this.formCadastro.valid){
      console.log('Manda para o banco de dados');

      const usuarioDTO = {
        name: this.formCadastro.value.nome,
        username: this.formCadastro.value.username,
        password: this.formCadastro.value.senha,
        phone:  this.formCadastro.value.telefone,
        avatar: this.formCadastro.value.avatar
      };

      //api rest
      this.httpClient.post('http://localhost:3200/users',usuarioDTO,{observe : 'response'})
      .subscribe((dadosServer) => {
          console.log('Retorno Server', dadosServer);
      });

    }
    else{
      const campos = this.formCadastro.controls;
      Object.keys(campos).forEach(function(controlNameCampoAtual){
          campos[controlNameCampoAtual].markAsTouched({onlySelf: true})
      })
    }

  }

}
