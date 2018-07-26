import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdePopoverModule } from '@material-extended/mde';

import {
   MatIconRegistry,
   MAT_CHIPS_DEFAULT_OPTIONS,

   MatToolbarModule,
   MatSidenavModule,
   MatButtonModule ,
   MatFormFieldModule,
   MatIconModule ,
   MatInputModule ,
   MatCardModule ,
   MatCheckboxModule,
   MatTableModule ,
   MatPaginatorModule ,
   MatSortModule ,
   MatSlideToggleModule ,
   MatListModule ,
   MatProgressSpinnerModule,
   MatSelectModule,
   MatNativeDateModule,
   MatMenuModule ,
   MatProgressBarModule,
   MatChipsModule,
   MatBadgeModule,
   MatTooltipModule,

  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdePopoverModule,

    MatToolbarModule,
    MatSidenavModule ,
    MatButtonModule ,
    MatFormFieldModule,
    MatIconModule ,
    MatInputModule ,
    MatCardModule ,
    MatCheckboxModule ,
    MatTableModule ,
    MatPaginatorModule ,
    MatSortModule ,
    MatSlideToggleModule ,
    MatListModule ,
    MatProgressSpinnerModule,
    MatSelectModule ,
    MatNativeDateModule,
    MatMenuModule ,
    MatProgressBarModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule,


  ],
  exports: [
    MdePopoverModule,
    MatToolbarModule,
    MatSidenavModule ,
    MatButtonModule ,
    MatFormFieldModule ,
    MatIconModule ,
    MatInputModule ,
    MatCardModule ,
    MatTableModule ,
    MatPaginatorModule ,
    MatSortModule ,
    MatSlideToggleModule ,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatMenuModule ,
    MatProgressBarModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule,

  ] ,
  providers: [
    MatIconRegistry ,
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
          separatorKeyCodes: [13, 188]
      }
  }
  ]
})
export class MaterialModule {
  constructor(
    public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    matIconRegistry.registerFontClassAlias('fontawesome', 'fab');
}
}
