import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs';

@Injectable()
export class TitleService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  getSeries() {
    return this.http.get<string[]>(
      environment.apiURI + 'get-series/' + this.authService._id
    );
  }

  getMovies() {
    return this.http.get<string[]>(
      environment.apiURI + 'get-movies/' + this.authService._id
    );
  }

  getTitles() {
    return this.http.get<{ series: string[]; movies: string[] }>(
      environment.apiURI + 'get-titles/' + this.authService._id
    );
  }

  addSeries(title: string) {
    this.http
      .post(environment.apiURI + 'add-series/' + this.authService._id, {
        title,
      })
      .subscribe((data) => console.log(data));
  }

  addMovie(title: string) {
    this.http
      .post(environment.apiURI + 'add-movie/' + this.authService._id, {
        title,
      })
      .subscribe((data) => console.log(data));
  }
}
