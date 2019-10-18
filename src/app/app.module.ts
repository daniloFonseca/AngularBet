import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import{TableModule} from 'primeng/table';
import {  HttpClientModule } from '@angular/common/http';
import { TabelaAdminComponent } from './tabela-admin/tabela-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    TabelaAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
