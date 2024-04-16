import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class FechaService {

    formartDate(){
        const fecha : Date = new Date ();

        const diaAux = fecha.getDate();
        const dia = diaAux >=10 ? diaAux : "0"+diaAux;
        const mesAux = 1+fecha.getMonth();
        const mes = mesAux >=10 ? mesAux : "0"+mesAux;
        const anio = fecha.getFullYear();
        const hora = fecha.getHours() >= 10 ? fecha.getHours() : '0'+fecha.getHours();
        const min = fecha.getMinutes() >=10 ? fecha.getMinutes() : '0'+fecha.getMinutes();

        return `${dia}/${mes}/${anio} ${hora}:${min}`;

    }
  }