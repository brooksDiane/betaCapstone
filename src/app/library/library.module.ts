import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const Materials = [
  MatProgressBarModule,
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
]; //to keep it cleaner down there..?

@NgModule({
  declarations: [LibraryComponent, DashboardComponent, VideoPlayerComponent],
  imports: [CommonModule, FormsModule, LibraryRoutingModule, ...Materials],
})
export class LibraryModule {}
