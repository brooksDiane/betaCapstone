import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSizePipe } from './data-size.pipe';
import { GenresPipe } from './genres.pipe';

@NgModule({
  declarations: [DataSizePipe, GenresPipe],
  exports: [DataSizePipe, GenresPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
