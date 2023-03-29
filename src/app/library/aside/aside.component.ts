import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  titleList!: string[];
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
    this.titleService.getSeries().subscribe((series) => {
      this.titleList = series;
      this.sort();
    });
  }

  getMovies() {
    this.titleService.getMovies().subscribe((movies) => {
      this.titleList = movies;
      this.sort();
    });
  }

  getTitles() {
    this.titleService.getTitles().subscribe((titles) => {
      this.titleList = titles.series.concat(titles.movies);
      this.sort();
    });
  }

  sort() {
    console.log(this.titleList);
    this.titleList.sort((a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(this.titleList);
  }
}
