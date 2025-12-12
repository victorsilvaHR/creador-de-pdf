import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/']);
          resolve(false);
        }
      });
    });
  }
}
