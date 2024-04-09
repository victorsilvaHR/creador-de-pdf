import { Component } from '@angular/core';
import { GenerarPDF } from '../servicios/generarPDF.service';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrl: './cotizador.component.css'
})
export class CotizadorComponent {
 constructor(
  private generarPDF: GenerarPDF
 ){}
 descargarPDF(){
 }
}
