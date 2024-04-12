import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  private destinoSubject = new Subject<string>();
  destinoObservable = this.destinoSubject.asObservable();
  
  enviarDestino(mensaje: string) {
    this.destinoSubject.next(mensaje);
  }
  private descripcionSubjetcts = new Subject<string>();
  descripcionObservable = this. descripcionSubjetcts.asObservable();

  enviarCaracteristicas(mensaje : string) {
    console.log(mensaje)
    this.descripcionSubjetcts.next(mensaje)
  }

  private pilotosSubjetcts = new Subject<string>();
  pilotosObservable = this.pilotosSubjetcts.asObservable();

  enviarPilotos(mensaje : string) {
    console.log(mensaje)
    this.pilotosSubjetcts.next(mensaje)
}
private segundaParteSubjetcts = new Subject<boolean>();
  segundaParteObservable = this.segundaParteSubjetcts.asObservable();

  segundaParte(mensaje : boolean) {
    console.log(mensaje)
    this.segundaParteSubjetcts.next(mensaje)
}
private resumenSubjetcts = new Subject<boolean>();
  resumenObservable = this.resumenSubjetcts.asObservable();

  enviarResumen(mensaje : boolean) {
    console.log(mensaje)
    this.resumenSubjetcts.next(mensaje)

}
}
