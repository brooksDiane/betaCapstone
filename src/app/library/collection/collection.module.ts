import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AsideComponent } from './aside/aside.component';
import { CollectionComponent } from './collection.component';
import { CollectionHeaderComponent } from './collection-header/collection-header.component';



const routes: Routes = [];



@NgModule({
  declarations: [
    CollectionComponent,
    CollectionHeaderComponent,
    AsideComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionModule { }
