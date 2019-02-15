import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedThingsModule } from 'src/app/shared/shared-things.modules';
import { LoginComponent } from './login.component';
import { loginRoutingModule } from './login.routes';
import { LoginService } from './services/login.services';


@NgModule({
    providers: [
        LoginService
    ],
    declarations:[
        LoginComponent
    ],
    imports:[
        CommonModule, //Ele que traz o ngif, for e os pipes do angular
        HttpClientModule,
        FormsModule,
        SharedThingsModule,
        loginRoutingModule
    ]
})

export class LoginModule{}