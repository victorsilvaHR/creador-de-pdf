import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../servicios/sharedData.service';
import { DataService } from '../servicios/db.service';
import { Medidas } from '../modelos/medidas';
import { Cotizacion } from '../modelos/cotizacion';


@Component({
  selector: 'app-elegir-caracteristicas',
  templateUrl: './elegir-caracteristicas.component.html',
  styleUrl: './elegir-caracteristicas.component.css'
})
export class ElegirCaracteristicasComponent implements OnInit {

  contizacion: Cotizacion [] = [];
  caracteristicas:any [] = []; 
  toneladas: string = '';
  medidas: Medidas = {
    largo:'',
    ancho:'',
    alto:'',
  }
  
  referencias : string = '';
  err: boolean = false;
  cotizaciones = false;
  disableRef = false;
  disAll = false;
  MAX_L = 14;
  MAX_A = 4.80;
  MAX_AL = 4;

  constructor (
    private sharedDataService : SharedDataService,
    private dataService :  DataService,
  )  {}
  
  ngOnInit(): void {
    this.catalogoCaracteristicas();
  }


  changeCaracteristicas(event: any) {
    console.log(event.target?.value)
    this.toneladas = event.target?.value;
    this.sharedDataService.enviarCaracteristicas(this.toneladas)
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
  if (this.toneladas && this.medidas.largo && this.medidas.ancho && this.medidas.alto && this.referencias) {
    if (this.contizacion.length < 4) {
      this.contizacion.push({
        peso: this.toneladas,
        medidas: {...this.medidas},
        referencia: this.referencias,
        destino: this.sharedDataService.destino  
      });
      const resumen = true;
      this.sharedDataService.enviarResumen(resumen);
      this.sharedDataService.enviarPiezas(this.contizacion);
      this.disableRef = true;
      this.sharedDataService.enviarDisableDestino(true)
      this.limpiarCampo();
    } else {
      this.cotizaciones = true; 
      this.disAll = true;
    } 
  } else {
    this.err = true;
  }
}

changeReferencias(event: any) {
  this.referencias = event.target?.value;
  this.sharedDataService.enviarReferencias(this.referencias)
}
onLargoChange(event: any) {
  let value = parseFloat(event.target.value);

  if (value < 1) {
    this.medidas.largo = 1;
  } else if (value > this.MAX_L) {
    this.medidas.largo = this.MAX_L;
    event.target.value = this.MAX_L;  // Ajusta el valor en el input
  } else {
    this.medidas.largo = value;
  }
}

onAnchoChange(event: any) {
  let value = parseFloat(event.target.value);

  if (value < 1) {
    this.medidas.ancho = 1;
  } else if (value > this.MAX_A) {
    this.medidas.ancho = this.MAX_A;
    event.target.value = this.MAX_A;  // Ajusta el valor en el input
  } else {
    this.medidas.ancho = value;
  }
}
onAltoChange(event: any){
  let value = parseFloat(event.target.value);

  if (value < 1) {
    this.medidas.alto = 1;
  } else if (value > this.MAX_AL) {
    this.medidas.alto = this.MAX_AL;
    event.target.value = this.MAX_AL;  // Ajusta el valor en el input
  } else {
    this.medidas.alto = value;
  }
}
limpiarCampo() {
  this.medidas.largo = ''; 
  this.medidas.ancho = '';
  this.medidas.alto = '';
  // this.referencias = '';
  this.toneladas = '';
}

}