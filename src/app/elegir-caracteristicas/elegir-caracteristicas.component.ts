import { Component, OnInit } from '@angular/core';
import { baseDatos } from '../modelos/cotizador';



@Component({
  selector: 'app-elegir-caracteristicas',
  templateUrl: './elegir-caracteristicas.component.html',
  styleUrl: './elegir-caracteristicas.component.css'
})
export class ElegirCaracteristicasComponent implements OnInit {

  caracteristicas:any [] = [] 
  opcionSeleccionada: string = ''
  elegir:any [] = [] 
  piloto: string = ''

  ngOnInit(): void {
    this.catalogoCaracteristicas();
    this.catalgoPiloto();
    
  };
catalogoCaracteristicas() {
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
changeCaracteristicas(event: any) {
  this.opcionSeleccionada = event.target?.value
  console.log(event.target?.value)
}
catalgoPiloto() {
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

elegirpiloto(event: any) {
  this.piloto = event.target?.value
  this.opcionSeleccionada = ''
}


}
