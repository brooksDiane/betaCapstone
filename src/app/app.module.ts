import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MarketingModule } from './marketing/marketing.module';
import { LibraryModule } from './library/library.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MarketingModule, LibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
