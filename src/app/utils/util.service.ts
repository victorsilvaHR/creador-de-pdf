import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments";
import { DataService } from "../servicios/db.service";
import { Cotizacion } from "../modelos/cotizacion";

@Injectable({
    providedIn: 'root'
  })
  export class UtilService {
    
    allDestinos: any[] = []

    constructor(
        private http: HttpClient,
        private dataService: DataService
    ) {}

    formartDate(){
        const fecha : Date = new Date ();

        const diaAux = fecha.getDate();
        const dia = diaAux >=10 ? diaAux : "0"+diaAux;
        const mesAux = 1+fecha.getMonth();
        const mes = mesAux >=10 ? mesAux : "0"+mesAux;
        const anio = fecha.getFullYear();

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
                  respuesta = 'Un Millon ' + this.numeroALetras(residuo);
              } else {
                  respuesta = this.numeroALetras(x) + ' Millones ' + this.numeroALetras(residuo);
              }
          }else if ((numero+'').length > 3) {
              let residuo  = parseInt((numero + ''))%1000;
              let x  = Math.floor(numero/1000);
      
              if (x == 1) {
                  respuesta = 'Mil ' + this.numeroALetras(residuo);
              } else {
                  respuesta = this.numeroALetras(x) + ' Mil ' + this.numeroALetras(residuo);
              }
          }        
      } else {
          if (numero == 100) {
              respuesta = 'Cien';
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
                      respuesta = '' + this.decenas_nal(ddec) + ' y ' + this.unidades_nal(unis);
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
        return 'Uno'
    }
    if (n + '' == '2') {
        return 'Dos'
    }
    if (n + '' == '3') {
        return 'Tres'
    }
    if (n + '' == '4') {
        return 'Cuatro'
    }
    if (n + '' == '5') {
        return 'Cinco'
    }
    if (n + '' == '6') {
        return 'Seis'
    }
    if (n + '' == '7') {
        return 'Siete'
    }
    if (n + '' == '8') {
        return 'Ocho'
    }
    if (n + '' == '9') {
        return 'Nueve'
    }

    
    if (n + '' == '10') {
        return 'Diez'
    }
    if (n + '' == '11') {
        return 'Once'
    }
    if (n + '' == '12') {
        return 'Doce'
    }
    if (n + '' == '13') {
        return 'Trece'
    }
    if (n + '' == '14') {
        return 'Catorce'
    }
    if (n + '' == '15') {
        return 'Quince'
    }
    if (n + '' == '16') {
        return 'Dieciseis'
    }
    if (n + '' == '17') {
        return 'Diecisiete'
    }
    if (n + '' == '18') {
        return 'Dieciocho'
    }
    if (n + '' == '19') {
        return 'Diecinueve'
    }

    return '';
  }
  decenas_nal(n){
    if (n + '' == '1') {
        return 'Diez'
    }
    if (n + '' == '2') {
        return 'Veinte'
    }
    if (n + '' == '3') {
        return 'Treinta'
    }
    if (n + '' == '4') {
        return 'Cuarenta'
    }
    if (n + '' == '5') {
        return 'Cincuenta'
    }
    if (n + '' == '6') {
        return 'Sesenta'
    }
    if (n + '' == '7') {
        return 'Setenta'
    }
    if (n + '' == '8') {
        return 'Ochenta'
    }
    if (n + '' == '9') {
        return 'Noventa'
    }
    
    return '';
  }
    centenas_nal(n){
    if (n + '' == '1') {
        return 'Ciento'
    }
    if (n + '' == '2') {
        return 'Docientos'
    }
    if (n + '' == '3') {
        return 'Trecientos'
    }
    if (n + '' == '4') {
        return 'Cuatrocientos'
    }
    if (n + '' == '5') {
        return 'Quinientos'
    }
    if (n + '' == '6') {
        return 'Seiscientos'
    }
    if (n + '' == '7') {
        return 'Setecientos'
    }
    if (n + '' == '8') {
        return 'Ochocientos'
    }
    if (n + '' == '9') {
        return 'Novecientos'
    }
    
    return '';
    }
    currentDateTime() {
        const fecha = new Date();
        const diaAux = fecha.getDate();
        const dia = diaAux >= 10 ? diaAux : '0'+diaAux;
        const mesAux = 1+fecha.getMonth();
        const mes = mesAux >= 10 ? mesAux : '0'+mesAux;
        const anio = fecha.getFullYear();
        const hora = fecha.getHours() >= 10 ? fecha.getHours() : '0'+fecha.getHours();
        const min = fecha.getMinutes() >= 10 ? fecha.getMinutes() : '0'+fecha.getMinutes();
        const seg = fecha.getSeconds() >= 10 ? fecha.getSeconds() : '0'+fecha.getSeconds();

        return `${dia}${mes}-${anio}h${hora}${min}-${seg}`;
    }
    subirArchivo(archivoSeleccionado: File, nameFile: string) {
          const userData = JSON.parse(sessionStorage.getItem('user')+'');
          const formData = new FormData();
          formData.append('archivo', archivoSeleccionado, nameFile);
          this.http.post(environment.dev+'/postFile.php', formData)
            .subscribe(
              (response) => {
                console.log('El archivo se ha subido correctamente:', response);
                this.sendMail(userData.email, nameFile);
              },
              (error) => {
                console.error('Error al subir el archivo:', error);
              }
            );
      }
    sendMail(mailTo: string, nameFile: string) {
        const req = {
            mailTo, nameFile
        }
        this.http.post(environment.dev+'/sendMail.php', req)
          .subscribe(
            (response) => {
              console.log('El email se envio correctamente:', response);
            },
            (error) => {
              console.error('Error al enviar el correo:', error);
            }
          );
    }
    calcularCosto(pieza: Cotizacion) {
        console.log('PIEZA',pieza);
        let subtotal = 0;
        let desc = '';
        pieza.pilotos = 0;
        const tempCotizacion = this.allDestinos.find(el => el.destino == pieza.destino);
        console.log('tempCotizacion', tempCotizacion);
        
        const tons = pieza.peso.split(' ')[1];
        
        switch (Number(tons)) {
            case 33:
                subtotal += tempCotizacion.hasta33T;
                desc += pieza.peso;
                break;
            case 39:
                subtotal += tempCotizacion.hasta39T;
                desc += pieza.peso;
            break;
            case 46:
                subtotal += tempCotizacion.hasta46T;
                desc += pieza.peso; 
            break;
            default:
                break;
        }
        // 3.31 - 3.70 Ancho 1 Piloto 
        // 3.71 - 4.80 Ancho 2 Piloto 
        if (Number(pieza.medidas.ancho) >= 3.31 && Number(pieza.medidas.ancho) <= 3.70) {
            subtotal += tempCotizacion.piloto1;
            desc += ' 1 piloto';
            pieza.pilotos = 1;
            
        } else if(Number(pieza.medidas.ancho) >= 3.71 && Number(pieza.medidas.ancho) <= 4.80) {
            subtotal += tempCotizacion.piloto1;
            subtotal += tempCotizacion.piloto2;
            desc += ' 2 pilotos';
            pieza.pilotos = 2;
        }
        console.log(desc,subtotal);

        pieza.precio = subtotal;
        return pieza;
    }
    calcuarTotal(lista: Cotizacion[]) {
        let monto = 0;
        lista.forEach(el => {
            monto += Number(el!.precio);
        });
        return monto;
    }
    mostrarPilotos(lista: Cotizacion[]) {
        const hayPilotos = lista.map(pieza => Number(pieza!.pilotos));     
        let numPilotos = Math.max(...hayPilotos).toString();
        return numPilotos;
    }
  }