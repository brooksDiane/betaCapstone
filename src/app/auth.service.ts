import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) { }

  /*
   an observable so guard can pipe it and redirect to signin page
   it is imported by signUp and signIn services, and changed in case of signup or signin
   and by guards. though the decision to have three different services related to authentication and registration
  */

  public set isSignedIn(v: boolean) {
    localStorage.setItem('isSignedIn', String(v));
  }

  public get isSignedIn(): boolean {
    if (localStorage.length === 0) {
      return false;
    } else {
      return JSON.parse(localStorage.getItem('isSignedIn')!);
    }
  }

  public set _id(v: string) {
    localStorage.setItem('_id', v);
  }

  public get _id(): string {
    return localStorage.getItem('_id')!;
  }

  onSignOut$ = new Subject<boolean>();
  user: UserData | undefined

  setSignedInState(value: boolean) {
    this.isSignedIn = value;
  }

  isSignedIn$(reverse: boolean = false): Observable<boolean> {
    if (reverse) {
      return of(!this.isSignedIn);
    } else {
      return of(this.isSignedIn);
    }
  }

  onSuccess(_id: string) {
    this._id = _id;
    this.setSignedInState(true);
    this.router.navigate(['lib']);
    this.getUserData$().subscribe(data => { this.user = data });
  }

  getUserData$() {
    return this.http.get<UserData>(`${environment.apiURI}user/${this._id}`);
  }

  signOut() {
    this._id = '';
    this.isSignedIn = false;
    of(true).subscribe(this.onSignOut$);
    this.router.navigate(['sign-in'])
  }


}
