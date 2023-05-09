import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { TitleItem, TitleItemRaw } from 'src/types';
import { Observable } from 'rxjs';

@Injectable()
export class GetTitleService implements OnInit {
  constructor(private authService: AuthService, private http: HttpClient) { }

  isFirstGet = true;
  isTitleUpdated: boolean = false;

  getMovies$!: Observable<TitleItemRaw[]>;
  movieList!: TitleItem[];


  ngOnInit(): void {
    this.authService.onSignOut$.subscribe((didSignOut) => {
      if (didSignOut) {
        this.movieList = [];
        this.isFirstGet = true;
      }
    })
  }

  getMovie(titleId: string) {
    return this.http.get<TitleItemRaw>(
      environment.apiURI + `movie/${this.authService._id}/${titleId}`
    );
  }

  private loadMovies(resolve: CallableFunction) {
    this.getMovies$ = this.http.get<TitleItemRaw[]>(
      environment.apiURI + 'get-movies/' + this.authService._id
    );
    this.getMovies$.subscribe(movies => {
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

  parseMovies(moviesRaw: TitleItemRaw[]): TitleItem[] {
    const moviesParsed: TitleItem[] = [];
    for (let movie of moviesRaw) {
      moviesParsed.push(this.parseMovie(movie));
    }
    return moviesParsed;
  }

  /**
   * intented for private use only, but you can use it...
   */
  parseMovie(movie: any) {
    movie.year = +movie.year;
    movie.size = +movie.size;
    movie.genres = JSON.parse(movie.genres);
    return movie;
  }


}
