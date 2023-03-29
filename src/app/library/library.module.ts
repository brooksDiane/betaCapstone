import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { VideoPlayerComponent } from './main/video-player/video-player.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { TitleService } from './title.service';

const Materials = [
  MatProgressBarModule,
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatCheckboxModule,
]; //to keep it cleaner down there..?

@NgModule({
  declarations: [
    LibraryComponent,
    DashboardComponent,
    VideoPlayerComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
  ],
  imports: [CommonModule, FormsModule, LibraryRoutingModule, ...Materials],
  providers: [TitleService],
})
export class LibraryModule {}
