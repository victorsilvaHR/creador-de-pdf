import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserService } from './users.service';

export const authGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const userService = inject(UserService);

  const auth = getAuth();

  // Esperar a Firebase para saber si hay usuario
  const user = await new Promise<any>((resolve) => {
    onAuthStateChanged(auth, (usuario) => resolve(usuario));
  });

  if (user) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
