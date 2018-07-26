import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { SocialAuthModule } from './social-auth/social-auth.module';
import { LanguageSwitcherModule } from './language-switcher/language-switcher.module';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

// Import your AvatarModule
import { AvatarModule } from 'ngx-avatar';


import {
  SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
};




import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SocialAuthModule,
    LanguageSwitcherModule,
    AvatarModule,
    SwiperModule,
    HighlightModule.forRoot({ theme: 'agate' })
  ],
  declarations: [
    ThemeSwitcherComponent,
    LanguageSwitcherComponent,
    UserDropdownComponent,
    SideMenuComponent,
    AccordionItemComponent,
    BreadcrumbsComponent,
  ],
  exports: [
    ThemeSwitcherComponent,
    LanguageSwitcherComponent,
    LanguageSwitcherModule,
    UserDropdownComponent,
    SideMenuComponent,
    AccordionItemComponent,
    BreadcrumbsComponent,
    MaterialModule,
    FormsModule,
    SocialAuthModule,
    AvatarModule,
    SwiperModule,
    HighlightModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class SharedModule { }
