import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from './auth.service';

export const AuthGuardFn: CanActivateFn = () => {
  const router = inject(Router);
  return inject(AuthService)
    .isSignedIn$()
    .pipe(
      tap((isSignedIn) => {
        if (!isSignedIn) router.navigate(['sign-in']);
      })
    );
};
