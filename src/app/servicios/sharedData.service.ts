import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cotizacion } from '../modelos/cotizacion';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  destino = '' 
  caracteristicas = ''
  piezas: Cotizacion[] = [];
  medidas = {};
  referencias = ''
  
  private destinoSubject = new Subject<string>();
  destinoObservable = this.destinoSubject.asObservable();
  
  enviarDestino(mensaje: string) {
    this.destinoSubject.next(mensaje);
    this.destino = mensaje;
  }
  private descripcionSubjetcts = new Subject<string>();
  descripcionObservable = this. descripcionSubjetcts.asObservable();

  enviarCaracteristicas(mensaje : string) {
    console.log(mensaje)
    this.descripcionSubjetcts.next(mensaje)
    this.caracteristicas = mensaje;

  }

  private piezasSubjetcts = new Subject<Cotizacion[]>();
  piezasObservable = this.piezasSubjetcts.asObservable();

  enviarPiezas(cotizacion : Cotizacion[]) {
    console.log(cotizacion)
    this.piezasSubjetcts.next(cotizacion)
    this.piezas = cotizacion;

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
private medidasSubjetcts = new Subject<any>();
  medidasObservable = this.medidasSubjetcts.asObservable();

  enviarMedidas(medidas : any) {
    this.medidasSubjetcts.next(medidas);
    this.medidas = medidas
}
private referenciasSubjetcts = new Subject<string>();
referenciasObservable = this.referenciasSubjetcts.asObservable();

enviarReferencias(referencias : string) {
  console.log(referencias)
  this.referenciasSubjetcts.next(referencias)
  this.referencias = referencias;
}

}
