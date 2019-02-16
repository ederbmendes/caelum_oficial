import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from './services/email.services';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent implements OnInit{

  constructor(private emailService: EmailService){
    
  }

  //ctrl+D - Refatoração
  private _newEmailForm = false;

  emails = []

  email = {
    destinatario: '',
    assunto:'',
    conteudo:'',
    dataCriacao: ''
  };

  ngOnInit(){

    this.ListarEmails();

  }

  ListarEmails(){

    this.emailService.listarEmail().subscribe((DadosSercice) => {
      console.log('dados do completos', DadosSercice);
      this.emails = DadosSercice;
  
      });
    
  }

  handleCriarEmail(evento : Event, formEmail : NgForm){
    
    evento.preventDefault();

    if (formEmail.invalid) return;
    
      const emailDTO = {
        to: this.email.destinatario,
        subject: this.email.assunto,
        content: this.email.conteudo,
      }

      this.emailService.enviarEmail(emailDTO)
      .subscribe((dadosServer) => {

          this.ListarEmails();

          this.email = {
            destinatario: '',
            assunto:'',
            conteudo:'',
            dataCriacao: ''
          };
    
          formEmail.reset();

      })
      
  }

  toggleNewFormEmail(){
    this._newEmailForm = !this._newEmailForm;
  }

  get isNewEmailOpen(){
    return this._newEmailForm;
  }

}


