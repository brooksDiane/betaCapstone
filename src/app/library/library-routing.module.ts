import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ifSignedIn } from '../guards';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryComponent } from './library.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
  {
    path: 'lib',
    component: LibraryComponent,
    canActivate: [ifSignedIn],
    canActivateChild: [ifSignedIn],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: ':video', component: VideoPlayerComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
