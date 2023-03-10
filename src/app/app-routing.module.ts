import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  // {
  //   // path: '',
  //   // component: MarketingComponent,
  //   // children: [{ path: 'pricing', component: PricingComponent }],
  // },
  { path: 'lib', component: LibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
