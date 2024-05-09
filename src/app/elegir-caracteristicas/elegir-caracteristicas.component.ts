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
      this.limpiarCampo();
      this.sharedDataService.enviarPiezas(this.contizacion);
      this.limpiarCampo();
    } else {
      this.cotizaciones = true; 
    } 
  } else {
    this.err = true;
  }
}

changeReferencias(event: any) {
  this.referencias = event.target?.value;
  this.sharedDataService.enviarReferencias(this.referencias)
}
onLargoChange(value: number) {
  console.log(value);
  if (value < 1) {
    this.medidas.largo = 1;
  } else if (value > 15) {
      this.medidas.largo = 15;
  }
}
onAnchoChange(value: number){
  if (value < 1) {
    this.medidas.ancho = 1;
  } else if (value > 5) {
    this.medidas.ancho = 5;
  }
}
onAltoChange(value: number){
  if (value < 1) {
    this.medidas.alto = 1;
  } else if (value > 5) {
    this.medidas.alto = 5;
  }
}
limpiarCampo() {
  this.medidas.largo = ''; 
  this.medidas.ancho = '';
  this.medidas.alto = '';
  this.referencias = '';
  this.toneladas = '';
}

}






