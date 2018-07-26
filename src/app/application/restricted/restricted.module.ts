import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrictedComponent } from './restricted.component';


import { routing } from './restricted.routing';


// shared modules
import {SharedModule} from '../../shared/shared.module';
import {SharedRestrictedModule} from './shared-restricted/shared-restricted.module';

@NgModule({
  imports: [
    CommonModule ,
    routing,

    SharedModule,
    SharedRestrictedModule


  ],
  declarations: [
    RestrictedComponent ,
  ],
  providers: []
})
export class RestrictedModule { }
