import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { AsideTitleListItem, TitleType } from 'src/types';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  titleList!: AsideTitleListItem[];
  isSeriesChecked = false;
  isMoviesChecked = false;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.getTitles();
  }

  refreshTitleList() {
    if (this.isMoviesChecked === this.isSeriesChecked) {
      this.getTitles();
    } else if (this.isMoviesChecked) {
      this.getMovies();
    } else if (this.isSeriesChecked) {
      this.getSeries();
    }
  }

  getSeries() {
    this.titleService.getSeriesList().subscribe((series) => {
      this.addTitleType(series, 'series');
      this.titleList = series;
      this.sort();
    });
  }

  getMovies() {
    this.titleService.getMoviesList().subscribe((movies) => {
      this.addTitleType(movies, 'movie');
      this.titleList = movies;
      this.sort();
    });
  }

  getTitles() {
    this.titleService.getTitlesList().subscribe((titles) => {
      this.addTitleType(titles.movies, 'movie');
      this.addTitleType(titles.series, 'series');
      this.titleList = titles.series.concat(titles.movies);
      this.sort();
    });
  }

  // *deep breath* I fucking hate myself for this code. Necessary for aside links to work
  addTitleType(array: AsideTitleListItem[], titleType: TitleType) {
    array.forEach((el) => (el.type = titleType));
  }

  sort() {
    this.titleList.sort((a, b) => {
      a.title = a.title.toLowerCase();
      b.title = b.title.toLowerCase();
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(this.titleList);
  }
}
