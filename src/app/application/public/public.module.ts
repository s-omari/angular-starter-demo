import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { routing } from './public.routing';


import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule ,
    SharedModule,
    routing,
  ],
  declarations: [
    PublicComponent  ,
    LoginComponent ,
    SignupComponent,
    ForgotPasswordComponent] ,
  bootstrap: []
})
export class PublicModule { }
