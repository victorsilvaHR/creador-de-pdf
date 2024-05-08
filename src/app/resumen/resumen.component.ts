import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../servicios/sharedData.service';
import { GenerarPDF } from '../servicios/generarPDF.service';
import { Cotizacion } from '../modelos/cotizacion';

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
    
    // this.sharedDataService.destinoObservable.subscribe(destino => {
    //   this.destino = destino;
    // });
    // this.sharedDataService.descripcionObservable.subscribe(descripcion => {
    //   this.caracteristicas = descripcion;
    // });
    // this.sharedDataService.medidasObservable.subscribe(medidas => {
    //   this.medidas = medidas;
    // });
    // this.sharedDataService.referenciasObservable.subscribe(referencias => {
    //   this.referencias = referencias;
    // });
    this.sharedDataService.piezasObservable.subscribe(piezas => {
      this.piezas = piezas
    })
    
}
  ngOnInit(): void {
  // this.destino = this.sharedDataService.destino;
  // this.caracteristicas = this.sharedDataService.caracteristicas;
  // this.medidas = this.sharedDataService.medidas;
    // this.referencias = this.sharedDataService.referencias;
    this.piezas = this.sharedDataService.piezas
  }

  descargarPDF(){
    this.generarPDF.pdfArmado(this.piezas);  
    console.log(this.piezas)
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
