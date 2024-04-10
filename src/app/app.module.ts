import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { ElegirDestinoComponent } from './elegir-destino/elegir-destino.component';
import { ElegirCaracteristicasComponent } from './elegir-caracteristicas/elegir-caracteristicas.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CotizadorComponent,
    ElegirDestinoComponent,
    ElegirCaracteristicasComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
