import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AsideComponent } from './aside/aside.component';
import { CollectionComponent } from './collection.component';
import { CollectionHeaderComponent } from './collection-header/collection-header.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SortingService } from './sorting.service';


const routes: Routes = [];

const Materials = [
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    CollectionComponent,
    CollectionHeaderComponent,
    AsideComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), SharedModule, ...Materials],
  exports: [RouterModule],
  providers: [SortingService]
})
export class CollectionModule { }
