import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { environment } from '../../environments';
import { baseDatos } from '../modelos/cotizador';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    app = initializeApp(environment.firebaseConfig);
    db = getDatabase(this.app);

    baseLocal = baseDatos;


    cargarData() {
    // recibe BD, ruta/nodo, Object puede o no llevar llaves
      set(ref(this.db, 'cotizador/'), this.baseLocal);
    }
}