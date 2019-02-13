import { Routes, RouterModule } from '@angular/router'

import { CadastroComponent } from './modules/cadastro/cadastro.component'
import { InboxComponent } from './modules/inbox/inbox.component'
import { LoginComponent } from './modules/login/login.component'
import { NgModule } from '@angular/core';

const rotas : Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', redirectTo: ''},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'inbox', component: InboxComponent},
    {path: '**', redirectTo: ''}, //ou criar 404
];

@NgModule({
    imports:[
        RouterModule.forRoot(rotas)
    ],
    exports:[
        RouterModule
    ]
})
export class ModuloRoteamento{}