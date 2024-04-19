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
  pilotos = '';
  medidas : any ;
  referencias : any

  constructor(private sharedDataService: SharedDataService, private generarPDF: GenerarPDF) {
    
    this.sharedDataService.destinoObservable.subscribe(destino => {
      this.destino = destino;
    });
    this.sharedDataService.descripcionObservable.subscribe(descripcion => {
      this.caracteristicas = descripcion;
    });
    this.sharedDataService.pilotosObservable.subscribe(pilotos => {
      this.pilotos = pilotos;
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
  this.pilotos = this.sharedDataService.pilotos;
  this.medidas = this.sharedDataService.medidas;
  this.referencias = this.sharedDataService;

  }

  descargarPDF(){
    this.generarPDF.pdfArmado(this.destino, this.caracteristicas, this.pilotos);
  }

}
