import { Component, OnInit } from '@angular/core';
import { AddTitleService } from '../add-title.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent implements OnInit {
  constructor(private addTitle: AddTitleService) {}

  genres: string[] = [];
  genreList = [
    'Action',
    'Animation',
    'Comedy',
    'Documentary',
    'Drama',
    'Fantasy',
    'Historical',
    'Horror',
    'Romance',
    'Science Fiction',
    'Thriller',
    'Western',
  ];

  onChange() {
    this.addTitle.data.genres = this.genres;
  }

  ngOnInit(): void {}
}
