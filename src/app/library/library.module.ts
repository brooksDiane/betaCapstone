import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [LibraryComponent, DashboardComponent],
  imports: [CommonModule, LibraryRoutingModule],
})
export class LibraryModule {}
