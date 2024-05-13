import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../servicios/sharedData.service';
import { GenerarPDF } from '../servicios/generarPDF.service';
import { Cotizacion } from '../modelos/cotizacion';
import { ElegirDestinoComponent } from '../elegir-destino/elegir-destino.component';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent implements OnInit {
  
  piezas: Cotizacion[] = [];
  destino = '';
  caracteristicas = '';
  medidas : any ;
  referencias : any; 

  constructor(private sharedDataService: SharedDataService, private generarPDF: GenerarPDF) {

    this.sharedDataService.piezasObservable.subscribe(piezas => {
      this.piezas = piezas
    })
    
}
  ngOnInit(): void {
    this.piezas = this.sharedDataService.piezas
  }

  descargarPDF(){
    console.log(this.piezas);
    this.generarPDF.pdfArmado(this.piezas);  
}
limpiarPantalla(){
  const resumen = false;
  this.sharedDataService.enviarResumen(resumen);
  this.sharedDataService.segundaParte(resumen);
}
  
  borrarPieza(indice) {
    this.piezas.splice(indice, 1)
  }
}
