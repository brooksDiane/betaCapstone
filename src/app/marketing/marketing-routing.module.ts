import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlatformsComponent } from './platforms/platforms.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'platforms', component: PlatformsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MarketingRoutingModule {}
