import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { baseDatos } from '../modelos/cotizador';
import { environment } from '../../environments';


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

    consultaCotizador() {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `/cotizador`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    
}