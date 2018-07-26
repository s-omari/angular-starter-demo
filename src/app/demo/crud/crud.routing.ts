import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { CrudComponent } from './crud.component';

const routes: Routes = [

  { path: '' , component: CrudComponent },
  // {path: 'categories' , redirectTo: '' , pathMatch: 'full' }


];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
