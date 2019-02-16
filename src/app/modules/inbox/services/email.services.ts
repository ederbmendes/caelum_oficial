import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


class Email{
    assunto: string;
    destinatario: string;
    conteudo: string;
    dataCriacao: string;

    constructor(assunto, destinatario, conteudo, dataCriacao){
        this.assunto = assunto;
        this.destinatario = destinatario;
        this.conteudo = conteudo;
        this.dataCriacao = dataCriacao;
    }

}


@Injectable()
export class EmailService{

    constructor(private httpClient: HttpClient){}

    API_URL: string = 'http://localhost:3200/emails';
    DEFAULT_HEADERS: object = {
        headers: {authorization: localStorage.getItem('TOKEN')}
    }

    enviarEmail(emailDTO: {to: string, subject: string, content: string}){

        return this.httpClient.post('http://localhost:3200/emails', emailDTO,
            {headers: {
                authorization: localStorage.getItem('TOKEN')
            }
        })
    }

    listarEmail(){

        return this.httpClient.get(this.API_URL, this.DEFAULT_HEADERS).pipe(
            map((dadosServer: Array<{subject: string,to: string, content: string, created_at: string}>) => {

                console.log(dadosServer);

                return dadosServer.map((emailMap) => {
                    
                    return new Email(
                        emailMap.subject,
                        emailMap.to,
                        emailMap.content,
                        emailMap.created_at);

                })

            })

        )

    }

}