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
  pilotos = ''

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
}
  ngOnInit(): void {
  this.destino = this.sharedDataService.destino;
  this.caracteristicas = this.sharedDataService.caracteristicas;
  this.pilotos = this.sharedDataService.pilotos;
  }

  descargarPDF(){
    this.generarPDF.pdfArmado(this.destino, this.caracteristicas, this.pilotos);
  }

}
