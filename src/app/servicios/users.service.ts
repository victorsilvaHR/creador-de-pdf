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

      async singIn(email: string, password: string): Promise<any> {
        try {
          const credentials = await signInWithEmailAndPassword(this.auth, email, password);
          // console.log('credentials',credentials);
          sessionStorage.setItem('email',credentials.user.email+"");
          this.router.navigateByUrl('/home');
          return credentials.user;
        } catch (error: any) {
          console.log(error);
        }
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
        this.router.navigateByUrl('/');
          }).catch((error) => {
            console.log('Error de Logout', error);
          });
    }
}


