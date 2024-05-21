import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { baseDatos, users } from '../modelos/cotizador';
import { environment } from '../../environments';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    app = initializeApp(environment.firebaseConfig);
    db = getDatabase(this.app);

    baseLocal = baseDatos;
    usuario = users;
    caracteristicas = [];
    pilotos = [];

    cargarData() {
    // recibe BD, ruta/nodo, Object puede o no llevar llaves
    // set(ref(this.db, 'users/'+this.usuario.uid), this.usuario);
      // set(ref(this.db, 'operadores/'), this.pilotos);
      set(ref(this.db, 'cotizador/'), this.baseLocal);
    }

    async consultaCotizador(): Promise<any> {
      try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `/cotizador`));
        
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
          return null;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    async consultaCaracteristicas(): Promise<any> {
      try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `/caracteristicas`));
        
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
          return null;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    async consultaOperadores(): Promise<any> {
      try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `/operadores`));
        
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
          return null;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    async usuarioById(idUser: string): Promise<any> {
      try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `/users/${idUser}`));
        
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
          return null;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
 
}