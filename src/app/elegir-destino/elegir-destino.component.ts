import { Component, OnInit } from '@angular/core';
import { baseDatos } from '../modelos/cotizador';

import { SharedDataService } from '../servicios/sharedData.service';
import { DataService } from '../servicios/db.service';

@Component({
  selector: 'app-elegir-destino',
  templateUrl: './elegir-destino.component.html',
  styleUrl: './elegir-destino.component.css'
})
export class ElegirDestinoComponent implements OnInit {

  destinos = baseDatos;
  
  constructor (
    private sharedDataService : SharedDataService,
    private dataService :  DataService
  )  {}
  
  ngOnInit(): void {
  //  this.dataService.cargarData();
      this.dataService.consultaCotizador();

  }

  enviarDestino(destino: string) {
    this.sharedDataService.enviarDestino(destino);
  }

  destinoElegido(event: any) {
    console.log(event.target?.value)
    this.enviarDestino(event.target?.value)

  }
  
  mostrarSegundaParteClick() {
    const segundaParte = true
    this.sharedDataService.segundaParte(segundaParte);
  }
  

  
}
