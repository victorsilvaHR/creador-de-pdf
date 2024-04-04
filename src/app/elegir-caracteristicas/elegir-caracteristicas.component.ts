import { Component, OnInit } from '@angular/core';
import { baseDatos } from '../modelos/cotizador';

@Component({
  selector: 'app-elegir-caracteristicas',
  templateUrl: './elegir-caracteristicas.component.html',
  styleUrl: './elegir-caracteristicas.component.css'
})
export class ElegirCaracteristicasComponent implements OnInit {
  caracteristicas:any [] = [] 

  ngOnInit(): void {
    this.catalogoCaracteristicas();
    
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

}
