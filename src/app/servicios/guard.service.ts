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
      const auth = getAuth();
   
      onAuthStateChanged(auth, (user) => {
        console.log(user);
        if (this.validateSession(auth, user)) {
          resolve(true);
        } else {
          this.router.navigate(['/']);
          resolve(false);
        }
      });
    });
  }
  validateSession(auth : any, user: any) : Boolean {
    let userValid = false
    try {
      userValid =  auth.currentUser.uid == user.uid
      return userValid;
    } catch (error) {
      console.log(error);
      return userValid;
    }
  }
}
