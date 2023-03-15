import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './library/library.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
