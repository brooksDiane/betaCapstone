import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { TitlePresentationItem } from 'src/types';

@Injectable()
export class GetTitleService implements OnInit {
  constructor(private authService: AuthService, private http: HttpClient) { }

  isFirstGet = true;
  isTitleUpdated: boolean = false;

  movieList!: TitlePresentationItem[];


  ngOnInit(): void {
    this.authService.onSignOut$.subscribe((didSignOut) => {
      if (didSignOut) {
        this.movieList = [];
        this.isFirstGet = true;
      }
    })
  }

  getMovie(titleId: string) {
    return this.http.get<any>(
      environment.apiURI + `movie/${this.authService._id}/${titleId}`
    );
  }

  loadMovies(resolve: CallableFunction) {
    this.http.get<TitlePresentationItem[]>(
      environment.apiURI + 'get-movies/' + this.authService._id
    ).subscribe(movies => {
      this.movieList = this.parseMovies(movies);
      this.isFirstGet = false;
      this.isTitleUpdated = false;
      resolve("LOADED");
    });;
  }

  async getMovies() {
    await new Promise((resolve, reject) => {
      if (this.isFirstGet || this.isTitleUpdated) {
        this.loadMovies(resolve);
      } else {
        resolve("RETURNED");
      }
    }).then(console.log);
    return this.movieList;
  }

  parseMovies(movies: TitlePresentationItem[]): TitlePresentationItem[] {
    for (let movie of movies) {
      if (typeof movie.genres !== 'object') {
        movie.genres = JSON.parse(movie.genres);
      }
      movie.year = +movie.year;
      movie.size = +movie.size;
    }
    return movies;
  }


}
