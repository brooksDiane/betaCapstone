import { Component, OnInit } from '@angular/core';

import { GetTitleService } from '../get-title.service';
import { TitleItem } from 'src/types';
import { environment } from 'src/environments/environment';
import { SortingService } from './sorting.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  constructor(private getTitleService: GetTitleService, private sorting: SortingService) { }

  movieList!: TitleItem[];

  apiURI = environment.apiURI;

  ngOnInit(): void {
    this.getMovies();
    this.sorting.sortedMovies$.subscribe((sortedMovies) => { //to get data updated each time movies are sorted
      this.movieList = sortedMovies;
    })
  }

  async getMovies() {
    this.movieList = await this.getTitleService.getMovies()
    this.sorting.setMoviesReference(this.movieList);
    console.log({ unsorted: this.movieList })
    this.sorting.sortMovies('name', 'ascending'); /*initial sorting*/
  }
}
