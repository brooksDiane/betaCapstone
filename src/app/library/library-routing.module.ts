import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ifSignedIn } from '../guards';
import { LibraryComponent } from './library.component';
import { TitleComponent } from './title/title.component';
import { AddTitleComponent } from './add-title/add-title.component';
import { CollectionComponent } from './collection/collection.component';


const routes: Routes = [
  {
    path: 'lib',
    component: LibraryComponent,
    canActivate: [ifSignedIn],
    canActivateChild: [ifSignedIn],
    children: [
      { path: '', component: CollectionComponent },
      {
        path: 'series/:id',
        component: TitleComponent,
        data: { titleType: 'series' },
      },
      {
        path: 'movie/:id',
        component: TitleComponent,
        data: { titleType: 'movies' },
      },
      {
        path: 'add',
        component: AddTitleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule { }
