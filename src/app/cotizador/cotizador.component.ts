import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/users.service';
import { SharedDataService } from '../servicios/sharedData.service';
import { DataService } from '../servicios/db.service';
import { GenerarPDF } from '../servicios/generarPDF.service';


@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrl: './cotizador.component.css'
})
export class CotizadorComponent implements OnInit {
  
  destino = false ;
  resumen = false ;
  nombre = '' ;
  

 constructor(
  private userService: UserService,
  private sharedDataService: SharedDataService,
  private dataService: DataService,
  private generarPDF: GenerarPDF
 ){ 
  this.sharedDataService.segundaParteObservable.subscribe(destino => {
    this.destino = destino;
  });
  this.sharedDataService.resumenObservable.subscribe(resumen => {
    this.resumen = resumen;
  });
 }
  ngOnInit(): void {
    const uid = sessionStorage.getItem('uid');
    this.getUsuario(uid)
    // this.generarPDF.pdfArmado(10);
  }
 descargarPDF()  {
  console.log("this.descargarPDF")
 }
 async getUsuario(uid) {
  try {
    const user = await this.dataService.usuarioById(uid);
    this.nombre = user.name
    // console.log(user) 
  } catch (error) {
    console.log(error);
    throw error;
  }
}
cerrarSesion() {
  this.userService.logOut();
  
 }
}
