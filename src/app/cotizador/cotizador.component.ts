import { Component } from '@angular/core';
import { GenerarPDF } from '../servicios/generarPDF.service';
import { UserService } from '../servicios/users.service';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrl: './cotizador.component.css'
})
export class CotizadorComponent {
 constructor(
  private generarPDF: GenerarPDF,
  private userService: UserService
 ){}
 descargarPDF(){
  this.generarPDF.pdfArmado();
 }
 cerrarSesion() {
  this.userService.logOut();
  
 }
}
