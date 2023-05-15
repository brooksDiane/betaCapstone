import { Component, OnInit } from '@angular/core';
import { AddTitleService } from './add-title.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.css'],
})
export class AddTitleComponent implements OnInit {
  step: 'data' | 'file' | 'summary' = 'data';
  constructor(private addTitleService: AddTitleService) { }

  addTitle() {
    this.addTitleService.addMovie();
    
  }

  ngOnInit(): void { }
}
