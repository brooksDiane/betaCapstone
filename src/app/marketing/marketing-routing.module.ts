import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';

import { MarketingComponent } from './marketing.component';

import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { PricingComponent } from './pricing/pricing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ifNotSignedIn } from '../guards';

const routes: Routes = [
  {
    path: '',
    component: MarketingComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'platforms', component: PlatformsComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'contact-us', component: ContactUsComponent },
      {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [ifNotSignedIn],
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        canActivate: [ifNotSignedIn],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingRoutingModule { }
