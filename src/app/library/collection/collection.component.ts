import { Component, OnInit } from '@angular/core';

import { GetTitleService } from '../get-title.service';
import { TitlePresentationItem } from 'src/types';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  constructor(private getTitleService: GetTitleService) { }

  movieList!: TitlePresentationItem[];

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies() {
    this.movieList = await this.getTitleService.getMovies()
  }

}
