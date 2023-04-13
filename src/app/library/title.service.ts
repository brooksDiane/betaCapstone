import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { AsideTitleListItem } from 'src/types';

@Injectable()
export class TitleService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  getSeriesList() {
    return this.http.get<AsideTitleListItem[]>(
      environment.apiURI + 'get-series/' + this.authService._id
    );
  }

  getMoviesList() {
    return this.http.get<AsideTitleListItem[]>(
      environment.apiURI + 'get-movies/' + this.authService._id
    );
  }

  getTitlesList() {
    return this.http.get<{
      series: AsideTitleListItem[];
      movies: AsideTitleListItem[];
    }>(environment.apiURI + 'get-titles/' + this.authService._id);
  }

  getMovie(titleId: string) {
    return this.http.get<any>(
      environment.apiURI + `movie/${this.authService._id}/${titleId}`
    );
  }

  addSeries(title: string) {
    this.http
      .post(environment.apiURI + 'add-series/' + this.authService._id, {
        title,
      })
      .subscribe((data) => console.log(data));
  }
}
