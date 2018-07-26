import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './demo.routing';

// shared module
import {SharedModule} from '../shared/shared.module';

// ng dynamic forms
import {DynamicFormsModule} from '../shared/dynamic-forms/dynamic-forms.module';



// validations
import { NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { DYNAMIC_VALIDATORS, Validator, ValidatorFactory } from '@ng-dynamic-forms/core';
import {
  customValidator,
  customDateRangeValidator,
  customForbiddenValidator,
  customAsyncFormGroupValidator
} from './validators';



import { MaterialSampleFormComponent } from './dynamic-form/material-sample-form.component';
import { UiComponentsComponent } from './ui-components/ui-components.component';
import { LocalizationComponent } from './localization/localization.component';
import { DemoComponent } from './demo.component';
import { CustomComponentsComponent } from './ui-components/custom-components/custom-components.component';
import { MaterialComponentsComponent } from './ui-components/material-components/material-components.component';



@NgModule({
  imports: [
    CommonModule,
    routing,

    SharedModule,
    DynamicFormsModule,

  ],
  declarations: [
    MaterialSampleFormComponent,
    UiComponentsComponent,
    LocalizationComponent,
    DemoComponent,
    CustomComponentsComponent,
    MaterialComponentsComponent
  ],
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: customValidator,
      multi: true
  },
  {
      provide: NG_VALIDATORS,
      useValue: customDateRangeValidator,
      multi: true
  },
  {
      provide: NG_ASYNC_VALIDATORS,
      useValue: customAsyncFormGroupValidator,
      multi: true
  },
  {
      provide: DYNAMIC_VALIDATORS,
      useValue: new Map<string, Validator | ValidatorFactory>([
          ['customValidator', customValidator],
          ['customDateRangeValidator', customDateRangeValidator],
          ['customForbiddenValidator', customForbiddenValidator],
          ['customAsyncFormGroupValidator', customAsyncFormGroupValidator]
      ])
  },

  ]
})
export class DemoModule { }
