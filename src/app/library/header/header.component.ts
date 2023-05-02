import { Component, OnInit } from '@angular/core';
import { setTimer } from 'src/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  isPopupOn = false;

  async showAcc() {
    this.isPopupOn = true;
    await setTimer(10500);
    this.isPopupOn = false;

  }


  ngOnInit(): void {
  }

}
