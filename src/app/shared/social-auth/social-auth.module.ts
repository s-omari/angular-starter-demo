import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
    //  provider: new GoogleLoginProvider('341670805228-f9astcr7ama8uq77sp7fl75o7hp0b8ps.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('561602290896109')
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  declarations: [],
  exports: [
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
})
export class SocialAuthModule { }
