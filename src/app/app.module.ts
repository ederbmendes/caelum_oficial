import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { ModuloRoteamento } from './app.routes';
import { AuthGuardGeral } from './shared/auth-guard-geral';
import { EmailService } from './modules/inbox/services/email.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InboxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    HttpClientModule
  ],
  providers: [AuthGuardGeral, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
