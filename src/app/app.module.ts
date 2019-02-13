import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ModuloRoteamento } from './app.routes';
import { CadastroModule } from './modules/cadastro/cadastro.modules';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InboxComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
