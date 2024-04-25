import { Component, Input, OnInit } from '@angular/core';
import { baseDatos } from '../modelos/cotizador';
import { SharedDataService } from '../servicios/sharedData.service';
import { DataService } from '../servicios/db.service';




@Component({
  selector: 'app-elegir-caracteristicas',
  templateUrl: './elegir-caracteristicas.component.html',
  styleUrl: './elegir-caracteristicas.component.css'
})
export class ElegirCaracteristicasComponent implements OnInit {

  caracteristicas:any [] = []; 
  opcionSeleccionada: string = '';
  catalogoPilotos:any [] = [];
  piloto: string = '';
  medidas = {
    largo:'',
    ancho:'',
    alto:'',
  }
  referencias : string = ''
  err: boolean = false;



  constructor (
    private sharedDataService : SharedDataService,
    private dataService :  DataService,
  )  {}
  
  ngOnInit(): void {
    this.catalogoCaracteristicas(this.opcionSeleccionada)
    this.catalgoPiloto();

  }


  changeCaracteristicas(event: any) {
    console.log(event.target?.value)
    this.opcionSeleccionada = event.target?.value;
    this.sharedDataService.enviarCaracteristicas(this.opcionSeleccionada)
  }

async catalogoCaracteristicas(caracteristicas: any) {
  try {
    const caract = await this.dataService.consultaCaracteristicas();
    this.caracteristicas = caract;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async catalgoPiloto() {
  try {
    const pilotos = await this.dataService.consultaOperadores();
    this.catalogoPilotos = pilotos;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
elegirpiloto(event: any) {
  console.log(event.target?.value)
  this.piloto = event.target?.value;
  this.sharedDataService.enviarPilotos(this.piloto)
}

mostrarResumen() {
  this.err = false;
  if (this.opcionSeleccionada && this.medidas.largo && this.medidas.ancho && this.medidas.alto  && this.piloto) {
    const resumen = true;
    this.sharedDataService.enviarResumen(resumen);
  } else {
    this.err = true;
  }
}

changeMedidas(event: any) {
  console.log(event.target?.value)
  this.opcionSeleccionada = event.target?.value;
  this.sharedDataService.enviarMedidas(this.medidas)
}
changeReferencias(event: any) {
  console.log(event.target?.value)
  this.referencias = event.target?.value;
  this.sharedDataService.enviarReferencias(this.referencias)
}


}






