import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RestrictedComponent } from './restricted.component';


const routes: Routes = [

  {
    path: '', component: RestrictedComponent,
    children: [
   //   { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
    ]

  }

];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
