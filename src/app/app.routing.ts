import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'restricted',
    loadChildren: './application/restricted/restricted.module#RestrictedModule' ,
    canActivate: [AuthGuardService]
  },
  { path: 'public', loadChildren: './application/public/public.module#PublicModule' },
  { path: 'home', loadChildren: './landing-page/landing-page.module#LandingPageModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
