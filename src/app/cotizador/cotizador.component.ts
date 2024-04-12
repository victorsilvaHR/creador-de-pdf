import { Component } from '@angular/core';
import { UserService } from '../servicios/users.service';
import { SharedDataService } from '../servicios/sharedData.service';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrl: './cotizador.component.css'
})
export class CotizadorComponent {
  destino = false ;
  resumen = false ;
 constructor(
  private userService: UserService,
  private sharedDataService: SharedDataService
 ){ 
  this.sharedDataService.segundaParteObservable.subscribe(destino => {
    this.destino = destino;
  });
  this.sharedDataService.resumenObservable.subscribe(resumen => {
    this.resumen = resumen;
  });
 }
 descargarPDF(){
 }
 cerrarSesion() {
  this.userService.logOut();
  
 }
}
