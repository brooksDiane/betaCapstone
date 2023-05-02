import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GetTitleService } from '../../get-title.service';
import { TitleItem } from 'src/types';

@Component({
  selector: 'app-collection-header',
  templateUrl: './collection-header.component.html',
  styleUrls: ['./collection-header.component.css']
})
export class CollectionHeaderComponent implements OnInit {
  size!: string;
  constructor(private auth: AuthService, private getTitleService: GetTitleService) { }

  titleCount: number = 0;

  ngOnInit(): void {
    this.getTitleService.getMovies$.subscribe(movies => {
      this.titleCount = movies.length;
      const parsedMovies = this.getTitleService.parseMovies(movies);
      this.calculateSize(parsedMovies);
    });
  }

  calculateSize(movies: TitleItem[]) {
    let size = 0;
    movies.forEach(movie => size += movie.size);
    console.log(size);
    if (size > 500000000) {
      this.size = (size / 1000000000).toFixed(1) + ' GB';
    } else {
      this.size = (size / 1000000).toFixed(0) + ' MB';
    }
    console.log(this.size);
  }

  signOut() {
    this.auth.signOut();
  }

}
