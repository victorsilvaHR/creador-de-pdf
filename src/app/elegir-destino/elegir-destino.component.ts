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
  textoBusqueda: string = '';
  destinoOk = true;

  
  constructor (
    private sharedDataService : SharedDataService,
    private dataService :  DataService
  )  {}
  
  ngOnInit(): void {
  //  this.dataService.cargarData();
    this.dataService.consultaCotizador();
  }
  buscarDestino() {
    this.destinoOk = false;
  }
  enviarDestino(destino: string) {
    this.sharedDataService.enviarDestino(destino);
  }

  // destinoElegido(event: any) {
  //   console.log(event.target?.value)
  //   this.enviarDestino(event.target?.value)
  // }
  
  mostrarSegundaParteClick() {
    if(this.textoBusqueda ){
    const segundaParte = true
    this.sharedDataService.segundaParte(segundaParte);
    }

  }

  destinoSelect(estado: any) {
    console.log('dobleClick', estado);
    this.textoBusqueda = estado.destino;
    this.enviarDestino(estado.destino);
    this.destinoOk = true;

  }
  
  
}
