import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddTitleModule } from './add-title/add-title.module';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { HeaderComponent } from './header/header.component';
import { GetTitleService } from './get-title.service';
import { TitleComponent } from './title/title.component';
import { CollectionModule } from './collection/collection.module';
import { SettingsComponent } from './settings/settings.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';

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
    VideoPlayerComponent,
    HeaderComponent,
    TitleComponent,
    SettingsComponent,
    ProfilePopupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LibraryRoutingModule,
    AddTitleModule,
    CollectionModule,
    ...Materials,
  ],
  providers: [GetTitleService],
})
export class LibraryModule { }
