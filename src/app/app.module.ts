import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { ModuloRoteamento } from './app.routes';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InboxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
