import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { MaterialSampleFormComponent } from './dynamic-form/material-sample-form.component';
import { UiComponentsComponent } from './ui-components/ui-components.component';
import { CustomComponentsComponent } from './ui-components/custom-components/custom-components.component';
import { MaterialComponentsComponent } from './ui-components/material-components/material-components.component';
import { LocalizationComponent } from './localization/localization.component';
import { DemoComponent } from './demo.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [

  {
    path: '', component: DemoComponent,
    children: [
      { path: 'dynamic-form', component: MaterialSampleFormComponent },
      {
        path: 'ui-components', component: UiComponentsComponent,
        children: [
          { path: 'custom-components', component: CustomComponentsComponent },
          { path: 'material-components', component: MaterialComponentsComponent },
        ],
      },
      { path: 'localization', component: LocalizationComponent },
      { path: 'crud', loadChildren: './crud/crud.module#CrudModule' }
    ]
  },


  // { path: '' , redirectTo: 'dynamic-form' , pathMatch: 'full'},
  // { path: 'dynamic-form' , component: MaterialSampleFormComponent },
  // { path: 'ui-components' , component: UiComponentsComponent },
  // { path: 'localization' , component: LocalizationComponent }

];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
