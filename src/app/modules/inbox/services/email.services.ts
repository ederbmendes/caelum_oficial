import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable()
export class EmailService{

    constructor(private httpClient: HttpClient){}

    enviarEmail(emailDTO: {to: string, subject: string, content: string}){

        return this.httpClient.post('http://localhost:3200/emails', emailDTO,
            {headers: {
                authorization: localStorage.getItem('TOKEN')
            }
        })
    }

}