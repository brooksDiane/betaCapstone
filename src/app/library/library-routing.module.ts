import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ifSignedIn } from '../guards';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { LibraryComponent } from './library.component';
import { VideoPlayerComponent } from './main/video-player/video-player.component';
import { TitleComponent } from './main/title/title.component';
import { AddTitleComponent } from './add-title/add-title.component';

const routes: Routes = [
  {
    path: 'lib',
    component: LibraryComponent,
    canActivate: [ifSignedIn],
    canActivateChild: [ifSignedIn],
    children: [
      { path: 'dashboard', component: DashboardComponent },
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
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
