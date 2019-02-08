import { Directive, ElementRef } from '@angular/core'

@Directive({
    selector: '[cmailInput]'
})

export class CmailFormInputDirective{
    constructor(elementoAtual: ElementRef){
        console.log('chamou');
        const elemento = elementoAtual.nativeElement;
        elemento.classList.add('mdl-textfield__input');

    }
}

