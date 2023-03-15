import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navBarClass = 'inactive';
  menuBtnDisplay = 'flex';
  menuArrowDisplay = 'none';

  scrollBtnClass = 'scroll-to-top inactive';
  headerClass = 'full';
  logoClass = 'logo full';
  root = document.querySelector('html')!;

  openMenu(): void {
    this.navBarClass = 'active';
    this.menuBtnDisplay = 'none';
    this.menuArrowDisplay = 'block';
  }

  closeMenu(): void {
    this.navBarClass = 'inactive';
    this.menuBtnDisplay = 'flex';
    this.menuArrowDisplay = 'none';
  }

  shrinkHeader() {
    if (window.scrollY >= 50) {
      this.headerClass = 'shrinked';
      this.logoClass = 'logo shrinked';
      this.root?.style.setProperty('--active-nav-top', '49.6px');
    } else {
      this.headerClass = 'full';
      this.logoClass = 'logo full';
      this.root?.style.setProperty('--active-nav-top', '80px');
    }
  }

  ngOnInit() {}
}
