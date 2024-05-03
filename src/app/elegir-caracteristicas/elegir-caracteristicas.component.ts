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
    this.catalogoCaracteristicas();
    // this.catalgoPiloto();

  }


  changeCaracteristicas(event: any) {
    console.log(event.target?.value)
    this.opcionSeleccionada = event.target?.value;
    this.sharedDataService.enviarCaracteristicas(this.opcionSeleccionada)
  }

async catalogoCaracteristicas() {
  try {
    const caract = await this.dataService.consultaCaracteristicas();
    this.caracteristicas = caract;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

mostrarResumen() {
  this.err = false;
  if (this.opcionSeleccionada && this.medidas.largo && this.medidas.ancho && this.medidas.alto && this.referencias) {
    const resumen = true;
    this.sharedDataService.enviarResumen(resumen);
    this.limpiarCampo();
  } else {
    this.err = true;
  }
  
}

changeMedidas(event: any) {
  console.log(event.target?.value)
  this.opcionSeleccionada = event.target?.value;
  this.sharedDataService.enviarMedidas({...this.medidas})
}
changeReferencias(event: any) {
  console.log(event.target?.value)
  this.referencias = event.target?.value;
  this.sharedDataService.enviarReferencias(this.referencias)
}
onLargoChange(value: number) {
  if (value < 1) {
    this.medidas.largo = '1';
  } else if (value > 15) {
    this.medidas.largo = '15';
  }
}
onAnchoChange(value: number){
  if (value < 1) {
    this.medidas.ancho = '1';
  } else if (value > 5) {
    this.medidas.ancho = '5';
  }
}
onAltoChange(value: number){
  if (value < 1) {
    this.medidas.alto = '1';
  } else if (value > 5) {
    this.medidas.alto = '5';
  }
}
limpiarCampo() {
  this.medidas.largo = ''; 
  this.medidas.ancho = '';
  this.medidas.alto = '';
  this.referencias = '';
  this.opcionSeleccionada = '';
}

}






