import { Routes, RouterModule } from '@angular/router'

import { InboxComponent } from './modules/inbox/inbox.component'
import { LoginComponent } from './modules/login/login.component'
import { NgModule } from '@angular/core';

const rotas : Routes = [
    {path: '', loadChildren:'src/app/modules/login/login.modules#LoginModule'},
    {path: 'login', redirectTo: '' },
    {path: 'cadastro', loadChildren:'src/app/modules/cadastro/cadastro.modules#CadastroModule'},
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