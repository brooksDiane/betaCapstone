import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { setTimer } from 'src/utils';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css'],
})
export class MarketingComponent implements OnInit, AfterViewInit {
  @ViewChild(HeaderComponent)
  private headerComponent!: HeaderComponent;

  scrollBtnClass = 'scroll-to-top inactive';

  ngOnInit() {
    this.scrollCheck();
  }

  ngAfterViewInit(): void {
    const html = document.querySelector('html')!.style;
    html.background = 'url(../../assets/images/white_pattern.png), #f8f8f8';
    html.color = 'var(--accent-dark)';
    html.fontFamily = 'Source Sans Pro, sans-serif';

    // document.querySelector('html')!.style.backgroundColor = 'black';
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
