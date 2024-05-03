import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../servicios/sharedData.service';
import { GenerarPDF } from '../servicios/generarPDF.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent implements OnInit {
  destino = '';
  caracteristicas = '';
  medidas : any ;
  referencias : any; 

  constructor(private sharedDataService: SharedDataService, private generarPDF: GenerarPDF) {
    
    this.sharedDataService.destinoObservable.subscribe(destino => {
      this.destino = destino;
    });
    this.sharedDataService.descripcionObservable.subscribe(descripcion => {
      this.caracteristicas = descripcion;
    });
    this.sharedDataService.medidasObservable.subscribe(medidas => {
      this.medidas = medidas;
    });
    this.sharedDataService.referenciasObservable.subscribe(referencias => {
      this.referencias = referencias;
    });
    
}
  ngOnInit(): void {
  this.destino = this.sharedDataService.destino;
  this.caracteristicas = this.sharedDataService.caracteristicas;
  this.medidas = this.sharedDataService.medidas;
  this.referencias = this.sharedDataService.referencias;

  }

  descargarPDF(){
    const datafile = {
      destino: this.destino,
      alto:  this.medidas.alto,
      largo: this.medidas.largo,
      ancho: this.medidas.ancho,
      referencias: this.referencias,
    }
    this.generarPDF.pdfArmado(datafile);  
}
}
