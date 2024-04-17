import { Component, Input, OnInit } from '@angular/core';
import { baseDatos } from '../modelos/cotizador';
import { SharedDataService } from '../servicios/sharedData.service';



@Component({
  selector: 'app-elegir-caracteristicas',
  templateUrl: './elegir-caracteristicas.component.html',
  styleUrl: './elegir-caracteristicas.component.css'
})
export class ElegirCaracteristicasComponent implements OnInit {

  caracteristicas:any [] = [] 
  opcionSeleccionada: string = ''


  constructor (private sharedDataService : SharedDataService)  {}
  
  ngOnInit(): void {
    this.catalogoCaracteristicas(this.opcionSeleccionada)
    this.catalgoPiloto(this.elegir)

  }
 
  changeCaracteristicas(event: any) {
    console.log(event.target?.value)
    this.opcionSeleccionada = event.target?.value;
    this.sharedDataService.enviarCaracteristicas(this.opcionSeleccionada)
  }

catalogoCaracteristicas(caracteristicas: any) {
  
  this.caracteristicas = [
    {
      id:1, descripcion: "Hasta 33 Toneladas"
    },
    {
      id:2, descripcion: "Hasta 39 Toneladas"
    },
    {
      id:3, descripcion: "Hasta 46 Toneladas"
    }
  ]
}

elegir:any [] = [] 
piloto: string = ''

elegirpiloto(event: any) {
  console.log(event.target?.value)
  this.piloto = event.target?.value;
  this.sharedDataService.enviarPilotos(this.piloto)
}
catalgoPiloto(elegir:any) {
  this.elegir = [
    {
      id:1, pilotos: "sin piloto"
    },
    {
      id:2, pilotos: "1"
    },
    {
      id:3, pilotos: "2"
    }
  ]
}
mostrarResumen() {
  if(this.opcionSeleccionada){
    const resumen = true
    this.sharedDataService.enviarResumen(resumen);
  }
}

}






