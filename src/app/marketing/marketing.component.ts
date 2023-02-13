import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { setTimer } from 'src/utils';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css'],
})
export class MarketingComponent implements OnInit {
  @ViewChild(HeaderComponent)
  private headerComponent!: HeaderComponent;

  scrollBtnClass = 'scroll-to-top inactive';

  ngOnInit() {
    this.scrollCheck();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }

  private async scrollCheck() {
    while (true) {
      await setTimer(400);
      this.headerComponent.shrinkHeader();
      this.activateScrollToTop();
    }
  }

  private activateScrollToTop() {
    if (window.scrollY >= 400) {
      this.scrollBtnClass = 'scroll-to-top active';
    } else {
      this.scrollBtnClass = 'scroll-to-top inactive';
    }
  }
}
