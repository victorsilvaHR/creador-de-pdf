import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      const auth = getAuth(); // seguro si Firebase está inicializado
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/']);
          resolve(false);
        }
      }, (err) => {
        console.error('Auth state error', err);
        this.router.navigate(['/']);
        resolve(false);
      });
    });
  }
}
