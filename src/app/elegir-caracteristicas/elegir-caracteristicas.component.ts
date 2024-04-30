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
  // piloto: string = '';
  medidas = {
    largo:'',
    ancho:'',
    alto:'',
  }
  referencias : string = ''
  err: boolean = false;
  mostrarBoton = false;
  medidas2 = {
    largo: null,
    ancho: null,
    alto: null
  };



  constructor (
    private sharedDataService : SharedDataService,
    private dataService :  DataService,
  )  {}
  
  ngOnInit(): void {
    this.catalogoCaracteristicas(this.opcionSeleccionada)
    // this.catalgoPiloto();

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

// async catalgoPiloto() {
//   try {
//     const pilotos = await this.dataService.consultaOperadores();
//     this.catalogoPilotos = pilotos;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }
// elegirpiloto(event: any) {
//   console.log(event.target?.value)
//   this.piloto = event.target?.value;
//   this.sharedDataService.enviarPilotos(this.piloto)
// }

mostrarResumen() {
  this.err = false;
  if (this.opcionSeleccionada && this.medidas.largo && this.medidas.ancho && this.medidas.alto && this.referencias) {
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
continuar() {
  // Realizar validaciones o acciones necesarias antes de mostrar el botón
  this.mostrarBoton = true;
}
agregarCotizacion() {
  // Realizar acciones para agregar la cotización
  // Por ejemplo, enviar los datos al servidor
  // Después, limpiar los valores de los inputs
  this.medidas2.largo = null;
  this.medidas2.ancho = null;
  this.medidas2.alto = null;
  // También puedes ocultar el botón nuevamente si es necesario
  this.mostrarBoton = false;

}

}






