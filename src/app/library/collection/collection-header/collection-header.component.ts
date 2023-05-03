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
  constructor(private auth: AuthService, private getTitleService: GetTitleService) { }

  titleCount: number = 0;
  size: number = 0;

  ngOnInit(): void {
    this.getTitleService.getMovies$.subscribe(movies => {
      this.titleCount = movies.length;
      const parsedMovies = this.getTitleService.parseMovies(movies);
      this.calculateSize(parsedMovies);
    });
  }

  calculateSize(movies: TitleItem[]) {
    movies.forEach(movie => this.size += movie.size);

  }

  signOut() {
    this.auth.signOut();
  }

}
