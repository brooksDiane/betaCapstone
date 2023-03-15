import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from './auth.service';

export const ifSignedIn: CanActivateFn = () => {
  const router = inject(Router);
  return inject(AuthService)
    .isSignedIn$()
    .pipe(
      tap((isSignedIn) => {
        if (!isSignedIn) router.navigate(['sign-in']);
      })
    );
};

export const ifNotSignedIn: CanActivateFn = () => {
  const router = inject(Router);
  return inject(AuthService)
    .isSignedIn$(true)
    .pipe(
      tap((isSignedIn) => {
        if (!isSignedIn) router.navigate(['lib']);
      })
    );
};
