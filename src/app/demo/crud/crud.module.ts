import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// shared module
import {SharedModule} from '../../shared/shared.module';



import { routing } from './crud.routing';
import { CrudComponent } from './crud.component';

import { CdkTableModule } from '@angular/cdk/table';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudTableComponent } from './components/crud-table/crud-table.component';

// ng dynamic forms
import {DynamicFormsModule} from '../../shared/dynamic-forms/dynamic-forms.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule ,
    CdkTableModule ,
    DynamicFormsModule
  ],
  declarations: [
    CrudComponent ,
    CrudTableComponent,
    CrudFormComponent
  ]
})
export class CrudModule { }
