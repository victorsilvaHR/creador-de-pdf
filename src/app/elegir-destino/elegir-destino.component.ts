import { Component } from '@angular/core';
import { baseDatos } from '../modelos/cotizador';

@Component({
  selector: 'app-elegir-destino',
  templateUrl: './elegir-destino.component.html',
  styleUrl: './elegir-destino.component.css'
})
export class ElegirDestinoComponent {
  destinos = baseDatos 

}
