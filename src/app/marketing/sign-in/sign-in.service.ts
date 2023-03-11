import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from 'src/app/auth.service';

import { SignInData } from 'src/types';

@Injectable()
export class SignInService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  signIn(email: string, password: string) {
    this.http
      .post<SignInData>('http://localhost:3000/sign-in', {
        email,
        password,
      })
      .subscribe({
        next: (data) => {
          if (data.isSuccessful) this.onSuccess(data._id!);
        },
      });
  }

  onSuccess(_id: string) {
    this.authService._id = _id;
    this.authService.setSignedInState(true);
  }
}
