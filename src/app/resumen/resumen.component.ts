import { Component } from '@angular/core';
import { SharedDataService } from '../servicios/sharedData.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {
  destino = '';
  caracteristicas = '';
  pilotos = ''

  constructor(private sharedDataService: SharedDataService) {
    
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

}
