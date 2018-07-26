import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



const routes: Routes = [

    { path: '', component: PublicComponent ,
      children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent},
        { path: 'reset-password', component: ForgotPasswordComponent},
      ]
    },
  ];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);

