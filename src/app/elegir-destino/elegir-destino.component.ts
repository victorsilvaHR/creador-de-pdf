import { Component, OnInit } from '@angular/core';

import { SharedDataService } from '../servicios/sharedData.service';
import { DataService } from '../servicios/db.service';
import { UtilService } from '../utils/util.service';


@Component({
  selector: 'app-elegir-destino',
  templateUrl: './elegir-destino.component.html',
  styleUrl: './elegir-destino.component.css'
})
export class ElegirDestinoComponent implements OnInit {

  destinos: any[]= [];
  textoDestino: string = '';
  destinoOk = true;
  err: boolean = false;
 


  
  constructor (
    private sharedDataService : SharedDataService,
    private dataService :  DataService,
    private utilService : UtilService
  )  {}
  
  ngOnInit(): void {
  //  this.dataService.cargarData();
      this.getDestinos();
      // let numero = 5135517; 
      // console.log(numero.toLocaleString());
      // let numeroATexto = this.utilService.numeroALetras(numero);
      // console.log(numeroATexto);
      
  }
  
  buscarDestino() {
    this.destinoOk = false;
  }
  enviarDestino(destino: string) {
    this.sharedDataService.enviarDestino(destino);
  }
  destinoElegido(event: any) {
    console.log(event.target?.value)
    this.enviarDestino(event.target?.value)
    this.destinoOk = true;
    this.err = false;
  }
  mostrarSegundaParteClick() {
    if(this.textoDestino ){
    const segundaParte = true
    this.sharedDataService.segundaParte(segundaParte);
    } else {
      this.err = true;
    }

  }
  // destinoSelect(estado: any) {
  //   this.textoDestino = estado.destino;
  //   this.enviarDestino(estado.destino);
  //   this.destinoOk = true;
  // }
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
