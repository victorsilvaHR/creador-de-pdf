import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../servicios/sharedData.service';
import { DataService } from '../servicios/db.service';
import { UtilService } from '../utils/util.service';

@Component({
  selector: 'app-elegir-destino',
  templateUrl: './elegir-destino.component.html',
  styleUrl: './elegir-destino.component.css'
})
export class ElegirDestinoComponent   implements OnInit {

  destinos: any[]= [];
  disDestino: boolean = false;
  textoDestino: string = '';
  destinoOk = true;
  err: boolean = false;
  
  constructor (
    private sharedDataService : SharedDataService,
    private dataService :  DataService,
    private utilService: UtilService,
  )  {
    this.sharedDataService.disDestinoObservable.subscribe(dis => {
      this.disDestino = dis
    })
  }
  
  ngOnInit(): void {
      this.getDestinos();
  }
  
  buscarDestino() {
    this.destinoOk = false;
  }
  enviarDestino(destino: string) {
    this.sharedDataService.enviarDestino(destino);
  }
  destinoElegido(event: any) {
    this.enviarDestino(event.target?.value)
    this.destinoOk = true;
    this.err = false;
  }
  mostrarSegundaParteClick() {
    if(this.textoDestino ){
    const segundaParte = true
    this.sharedDataService.segundaParte(segundaParte);
    } else {
      this.err = true;
    }
  }

  async getDestinos() {
    try {
      const destinos = await this.dataService.consultaCotizador();
      this.destinos = destinos;
      this.utilService.allDestinos = destinos;

    } catch (error) {
      console.log(error);
      throw error;
    }
  }
 
}
