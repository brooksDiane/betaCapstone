import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { AuthService } from 'src/app/auth.service';
import { SignInResponse } from 'src/types';

@Injectable()
export class SignInService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  signIn(email: string, password: string) {
    this.http
      .post<SignInResponse>(environment.apiURI + `sign-in`, {
        email,
        password,
      })
      .subscribe({
        next: (data) => {
          if (data.isSuccessful) this.authService.onSuccess(data._id!);
        },
      });
  }
}
