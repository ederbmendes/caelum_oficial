import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormInputDirective } from 'src/app/components/cmail-form-group/cmail-form-input-directive';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { cadastroRoutingModule } from './cadastro.routes';
import { SharedThingsModule } from 'src/app/shared/shared-things.modules';

@NgModule({
    declarations:[
        CadastroComponent
    ],
    imports:[
        CommonModule, //Ele que traz o ngif, for e os pipes do angular
        HttpClientModule,
        ReactiveFormsModule,
        cadastroRoutingModule,
        SharedThingsModule
    ]

})

export class CadastroModule{}