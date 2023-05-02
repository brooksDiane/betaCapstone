import { Component, OnInit } from '@angular/core';

import { GetTitleService } from '../get-title.service';
import { TitleItem } from 'src/types';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  constructor(private getTitleService: GetTitleService) { }

  movieList!: TitleItem[];
  apiURI = environment.apiURI;

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies() {
    this.movieList = await this.getTitleService.getMovies()
  }

}
