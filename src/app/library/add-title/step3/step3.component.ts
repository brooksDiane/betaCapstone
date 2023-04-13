import { Component, OnInit } from '@angular/core';
import { pendingMovieData } from 'src/types';
import { AddTitleService } from '../add-title.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
})
export class Step3Component implements OnInit {
  data!: pendingMovieData;
  fileName!: string;

  constructor(private addTitle: AddTitleService) {}

  ngOnInit(): void {
    this.data = { ...this.addTitle.data };
    this.fileName = this.addTitle.file?.name!;
  }
}
