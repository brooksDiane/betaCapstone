import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AuthGuardFn } from './guards';

import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {
    path: 'lib',
    component: LibraryComponent,
    canActivate: [AuthGuardFn],
    canActivateChild: [AuthGuardFn],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
