import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private router: Router,) {}
    app = initializeApp(environment.firebaseConfig);
    private auth = getAuth();

    singIn(email: string, password: string){
        signInWithEmailAndPassword(this.auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      }

    createUser(email: string, password: string){
       createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }
    logOut() {
        signOut(this.auth).then(() => {
            // Sign-out successful.
        this.router.navigateByUrl('/');

          }).catch((error) => {
            // An error happened.
          });
    }
}


