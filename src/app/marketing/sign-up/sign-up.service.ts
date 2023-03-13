import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpResponse } from 'src/types';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth.service';

@Injectable()
export class SignUpService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  signUp(email: string, password: string, firstname: string, lastname: string) {
    this.http
      .post<SignUpResponse>(environment.apiURI + 'sign-up', {
        email,
        password,
        firstname,
        lastname,
      })
      .subscribe((data) => {
        if (data.isSuccessful) this.onSuccess(data._id!);
      });
  }

  onSuccess(_id: string) {
    this.authService._id = _id;
    this.authService.setSignedInState(true);
  }
}
