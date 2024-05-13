import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cotizacion } from '../modelos/cotizacion';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  destino = '' 
  // disableDest = false;
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
  //
  private disDestinoSubject = new Subject<boolean>();
  disDestinoObservable = this.disDestinoSubject.asObservable();
  
  enviarDisableDestino(disableDestino: boolean) {
    this.disDestinoSubject.next(disableDestino);
    // this.disableDest = disableDestino;
  }
  //
  private descripcionSubjetcts = new Subject<string>();
  descripcionObservable = this. descripcionSubjetcts.asObservable();

  enviarCaracteristicas(mensaje : string) {
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
    this.segundaParteSubjetcts.next(mensaje)
}
private resumenSubjetcts = new Subject<boolean>();
  resumenObservable = this.resumenSubjetcts.asObservable();

  enviarResumen(mensaje : boolean) {
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
    this.referenciasSubjetcts.next(referencias)
    this.referencias = referencias;
  }

}
