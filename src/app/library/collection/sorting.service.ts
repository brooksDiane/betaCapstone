import { Injectable } from '@angular/core';
import { sortingCriterion, sortingOrder, TitleItem } from 'src/types';
import { Subject } from 'rxjs';

@Injectable()
export class SortingService {
  constructor() { }

  sortedMovies$ = new Subject<TitleItem[]>()

  rawMovies!: TitleItem[];

  /**
   * Is to be set during CollectionComponent init
   * @param reference The reference to pass
   */
  setMoviesReference(reference: TitleItem[]) {
    this.rawMovies = reference;
  }

  sortMovies(criterion: sortingCriterion, order: sortingOrder, filters?: string[]) {
    let movies: TitleItem[] = this.rawMovies; //abstraction...

    if (filters) {
      movies = this.filter(movies, filters);
    }

    switch (criterion) {
      case 'name':
        this.sortByName(movies);
        break;
      case 'size':
        this.sortBySize(movies);
        break;
      case 'year':
        this.sortByYear(movies);
        break;
    }
    console.log({ sorted: movies });
    if (order === 'descending') {
      movies.reverse()
      console.log({ reversed: movies });
    }

    this.sortedMovies$.next(movies);
  }

  filter(movies: TitleItem[], filters: string[]) {
    return movies.filter(movie => {
      for (const filter of filters) {
        if (!movie.genres.includes(filter)) {
          return false;
        }
      }
      return true;
    })
  }

  sortByName(movies: TitleItem[]) {
    movies.sort((a, b) => {
      let a2 = a.title;
      let b2 = b.title;
      a2.toLowerCase();
      b2.toLowerCase();
      if (a2 >= b2) return 1;
      else return -1;
    })
  }

  sortBySize(movies: TitleItem[]) {
    movies.sort((a, b) => a.size - b.size)
  }

  sortByYear(movies: TitleItem[]) {
    movies.sort((a, b) => a.year - b.year)
  }

}
