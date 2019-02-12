import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { RouterModuloConfigurado } from './app.routes';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component'
import { CmailFormInputDirective } from './components/cmail-form-group/cmail-form-input-directive';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InboxComponent,
    LoginComponent,
    CadastroComponent,
    CmailFormGroupComponent,
    CmailFormInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModuloConfigurado,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
