import { Component, OnInit } from '@angular/core';

import { SharedDataService } from '../servicios/sharedData.service';
import { DataService } from '../servicios/db.service';

@Component({
  selector: 'app-elegir-destino',
  templateUrl: './elegir-destino.component.html',
  styleUrl: './elegir-destino.component.css'
})
export class ElegirDestinoComponent implements OnInit {

  destinos: any[]= [];
  textoBusqueda: string = '';
  destinoOk = true;

  
  constructor (
    private sharedDataService : SharedDataService,
    private dataService :  DataService
  )  {}
  
  ngOnInit(): void {
  //  this.dataService.cargarData();
      this.getDestinos();
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
    this.textoBusqueda = estado.destino;
    this.enviarDestino(estado.destino);
    this.destinoOk = true;
  }
  async getDestinos() {
    try {
      const destinos = await this.dataService.consultaCotizador();
      this.destinos = destinos;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
