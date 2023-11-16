import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

import { ServiceDepartamentos } from './services/service.departamentos';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { EditdepartamentoComponent } from './components/editdepartamento/editdepartamento.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, InsertardepartamentoComponent, EditdepartamentoComponent],
  imports: [BrowserModule, routing, HttpClientModule, FormsModule],
  providers: [appRoutingProviders, ServiceDepartamentos],
  bootstrap: [AppComponent],
})
export class AppModule {}
