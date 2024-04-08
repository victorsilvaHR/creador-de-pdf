import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private mensajeSubject = new Subject<string>();
  destinoObservable = this.mensajeSubject.asObservable();

  enviarDestino(mensaje: string) {
      console.log(mensaje)
    this.mensajeSubject.next(mensaje);
  }
}
