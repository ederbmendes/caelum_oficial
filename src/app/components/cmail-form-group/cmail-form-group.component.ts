import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styleUrls: ['./cmail-form-group.component.css']
})
export class CmailFormGroupComponent implements OnInit {

  elemento: ElementRef;
  valorDaLabel: string;
  @Input() campo;
 
  constructor(elemento: ElementRef) { 

    console.log('Construtor');
    this.elemento = elemento;

  }

  ngOnInit() {//roda depois que o elemento foi criado na tela

    console.log('campo no cmail-form-group', this.campo)
    const elementoInput = this.elemento.nativeElement.querySelector('input');
    this.valorDaLabel = elementoInput.getAttribute('placeholder');
    elementoInput.setAttribute('placeholder',' ');

  }

}
