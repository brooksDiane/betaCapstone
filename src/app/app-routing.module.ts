import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './library/library.component';
import { MarketingComponent } from './marketing/marketing.component';

const routes: Routes = [
  { path: '', component: MarketingComponent },
  { path: 'lib', component: LibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
