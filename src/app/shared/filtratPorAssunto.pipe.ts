import {  Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filtrarPorAssunto'
})

export class filtrarPorAssuntoPipe implements PipeTransform{

    transform(emails, value){

        const listaAtualizada = emails.filter((emailAtual) => {

            const valorDigitadoPeloUsuario: string = value.toLowerCase();
            const assuntoDoEmailAtual: string = emailAtual.assunto.toLowerCase();

            return assuntoDoEmailAtual.includes(valorDigitadoPeloUsuario);

        })

        return listaAtualizada;
    }

}