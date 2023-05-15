import { Component, OnInit } from '@angular/core';
import { sortingCriterion, sortingOrder } from 'src/types';
import { SortingService } from '../sorting.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  constructor(private sorting: SortingService) { }

  criterion: sortingCriterion = 'name';
  order: sortingOrder = 'ascending';

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

  selectedFilters: string[] = []

  onFilterSelect(newFilter: string) {
    let index = this.selectedFilters.indexOf(newFilter);
    if (index === -1) {
      this.selectedFilters.push(newFilter);
    } else {
      this.selectedFilters.splice(index, 1);
    }
    console.log(this.selectedFilters);
  }

  sort() {
    this.sorting.sortMovies(this.criterion, this.order, this.selectedFilters);

  }

  ngOnInit(): void { }

}
