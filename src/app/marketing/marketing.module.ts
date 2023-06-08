import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MarketingRoutingModule } from './marketing-routing.module';

import { MarketingComponent } from './marketing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { PricingComponent } from './pricing/pricing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FieldService } from './field.service';

@NgModule({
  declarations: [
    MarketingComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactUsComponent,
    MainPageComponent,
    PlatformsComponent,
    PricingComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [CommonModule, MarketingRoutingModule, FormsModule],
  providers: [FieldService],
})
export class MarketingModule { }
