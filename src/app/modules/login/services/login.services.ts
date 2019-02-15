import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable()
export class LoginService{

    constructor(private httpClient: HttpClient){}

    logarUsuario(dadosLogin: {email: string, password: string}){

        console.log('Logar Usuario', dadosLogin);

        return this.httpClient.post('http://localhost:3200/login', dadosLogin)
        .pipe(
            map((dadosServer: any) => {
                localStorage.setItem('TOKEN', dadosServer.token);
            })
        );


    }

}