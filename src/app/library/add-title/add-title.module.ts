import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { AddTitleComponent } from './add-title.component';
import { FormsModule } from '@angular/forms';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { GenreComponent } from './genre/genre.component';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CoverUploaderComponent } from './cover-uploader/cover-uploader.component';
import { AddTitleService } from './add-title.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';

const Materials = [MatSelectModule, MatInputModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [
    FileUploaderComponent,
    AddTitleComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    GenreComponent,
    CoverUploaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ...Materials,
  ],
  exports: [AddTitleComponent],
  providers: [AddTitleService],
})
export class AddTitleModule { }
