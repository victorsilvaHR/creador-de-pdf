import { Component } from '@angular/core';
import { baseDatos } from '../modelos/cotizador';
import { SharedDataService } from '../servicios/sharedData.service';

@Component({
  selector: 'app-elegir-destino',
  templateUrl: './elegir-destino.component.html',
  styleUrl: './elegir-destino.component.css'
})
export class ElegirDestinoComponent {

  destinos = baseDatos 
  
  constructor (private sharedDataService : SharedDataService)  {}

  enviarDestino(destino: string) {
    this.sharedDataService.enviarDestino(destino);
  }

  destinoElegido(event: any) {
    console.log(event.target?.value)
    this.enviarDestino(event.target?.value)

  }
  
}
