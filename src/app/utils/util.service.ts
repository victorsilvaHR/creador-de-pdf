import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class UtilService {

    formartDate(){
        const fecha : Date = new Date ();

        const diaAux = fecha.getDate();
        const dia = diaAux >=10 ? diaAux : "0"+diaAux;
        const mesAux = 1+fecha.getMonth();
        const mes = mesAux >=10 ? mesAux : "0"+mesAux;
        const anio = fecha.getFullYear();
        // const hora = fecha.getHours() >= 10 ? fecha.getHours() : '0'+fecha.getHours();
        // const min = fecha.getMinutes() >=10 ? fecha.getMinutes() : '0'+fecha.getMinutes();

        return `${dia}/${mes}/${anio}`;

    }
    numeroALetras(n: number): string {
      
      let num = Number((n*100)+'');

      const centavos = num%100;
      let numero: any = parseInt(n+'');

      let respuesta = '';

      if (numero > 999) {
          if ((numero+'').length > 6) {
              
              let residuo  = parseInt((numero + ''))%1000000;
              let x = Math.floor(numero/1000000);
      
              if (x == 1) {
                  respuesta = 'UN MILLON ' + this.numeroALetras(residuo);
              } else {
                  respuesta = this.numeroALetras(x) + ' MILLONES ' + this.numeroALetras(residuo);
              }
          }else if ((numero+'').length > 3) {
              let residuo  = parseInt((numero + ''))%1000;
              let x  = Math.floor(numero/1000);
      
              if (x == 1) {
                  respuesta = 'MIL ' + this.numeroALetras(residuo);
              } else {
                  respuesta = this.numeroALetras(x) + ' MIL ' + this.numeroALetras(residuo);
              }
          }        
      } else {
          if (numero == 100) {
              respuesta = 'CIEN';
          }else if (numero > 100) {
              let cen = Math.floor(numero/100);
              let dec = numero % 100;

              respuesta = '' + this.centenas_nal(cen) + ' ' + this.numeroALetras(dec);
          }else{
              let dec = numero % 100;

              if (dec < 20) {
                  respuesta = '' + this.unidades_nal(dec);
              } else {
                  let unis = dec%10;
                  let ddec = Math.floor(dec/10);

                  if (unis != 0) {
                      respuesta = '' + this.decenas_nal(ddec) + ' Y ' + this.unidades_nal(unis);
                  } else {
                      respuesta = '' + this.decenas_nal(ddec);
                  }
              }
          }
      }

      return respuesta;
  }
  unidades_nal(n){
    if (n + '' == '1') {
        return 'UNO'
    }
    if (n + '' == '2') {
        return 'DOS'
    }
    if (n + '' == '3') {
        return 'TRES'
    }
    if (n + '' == '4') {
        return 'CUATRO'
    }
    if (n + '' == '5') {
        return 'CINCO'
    }
    if (n + '' == '6') {
        return 'SEIS'
    }
    if (n + '' == '7') {
        return 'SIETE'
    }
    if (n + '' == '8') {
        return 'OCHO'
    }
    if (n + '' == '9') {
        return 'NUEVE'
    }

    
    if (n + '' == '10') {
        return 'DIEZ'
    }
    if (n + '' == '11') {
        return 'ONCE'
    }
    if (n + '' == '12') {
        return 'DOCE'
    }
    if (n + '' == '13') {
        return 'TRECE'
    }
    if (n + '' == '14') {
        return 'CATORCE'
    }
    if (n + '' == '15') {
        return 'QUINCE'
    }
    if (n + '' == '16') {
        return 'DIECISEIS'
    }
    if (n + '' == '17') {
        return 'DIECISIETE'
    }
    if (n + '' == '18') {
        return 'DIECIOCHO'
    }
    if (n + '' == '19') {
        return 'DIECINUEVE'
    }

    return '';
  }
  decenas_nal(n){
    if (n + '' == '1') {
        return 'DIEZ'
    }
    if (n + '' == '2') {
        return 'VEINTE'
    }
    if (n + '' == '3') {
        return 'TREINTA'
    }
    if (n + '' == '4') {
        return 'CUARENTA'
    }
    if (n + '' == '5') {
        return 'CINCUENTA'
    }
    if (n + '' == '6') {
        return 'SESENTA'
    }
    if (n + '' == '7') {
        return 'SETENTA'
    }
    if (n + '' == '8') {
        return 'OCHENTA'
    }
    if (n + '' == '9') {
        return 'NOVENTA'
    }
    
    return '';
  }
centenas_nal(n){
  if (n + '' == '1') {
      return 'CIENTO'
  }
  if (n + '' == '2') {
      return 'DOCIENTOS'
  }
  if (n + '' == '3') {
      return 'TRECIENTOS'
  }
  if (n + '' == '4') {
      return 'CUATROCIENTOS'
  }
  if (n + '' == '5') {
      return 'QUINIENTOS'
  }
  if (n + '' == '6') {
      return 'SEISCIENTOSD'
  }
  if (n + '' == '7') {
      return 'SETECIENTOS'
  }
  if (n + '' == '8') {
      return 'OCHOCIENTOS'
  }
  if (n + '' == '9') {
      return 'NOVECIENTOS'
  }
  
  return '';
}
  }