import { Component, OnInit } from '@angular/core';
import { AddTitleService } from '../add-title.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit {
  constructor(private addTitle: AddTitleService) {}

  private _title!: string;
  private _year!: string;

  get title() {
    return this._title;
  }
  set title(v) {
    this._title = v;
    this.addTitle.data.title = this.title;
  }

  get year() {
    return this._year;
  }
  set year(v) {
    this._year = v;
    this.addTitle.data.year = this._year;
  }

  ngOnInit(): void {}

}
