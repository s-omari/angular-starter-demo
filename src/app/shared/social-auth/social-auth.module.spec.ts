import { SocialAuthModule } from './social-auth.module';

describe('SocialAuthModule', () => {
  let socialAuthModule: SocialAuthModule;

  beforeEach(() => {
    socialAuthModule = new SocialAuthModule();
  });

  it('should create an instance', () => {
    expect(socialAuthModule).toBeTruthy();
  });
});
