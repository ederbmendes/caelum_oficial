import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormInputDirective } from 'src/app/components/cmail-form-group/cmail-form-input-directive';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations:[
        CadastroComponent,
        CmailFormGroupComponent,
        CmailFormInputDirective
    ],
    imports:[
        CommonModule, //Ele que traz o ngif, for e os pipes do angular
        HttpClientModule,
        ReactiveFormsModule
    ]

})

export class CadastroModule{}