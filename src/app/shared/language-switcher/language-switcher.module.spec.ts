import { LanguageSwitcherModule } from './language-switcher.module';

describe('LanguageSwitcherModule', () => {
  let languageSwitcherModule: LanguageSwitcherModule;

  beforeEach(() => {
    languageSwitcherModule = new LanguageSwitcherModule();
  });

  it('should create an instance', () => {
    expect(languageSwitcherModule).toBeTruthy();
  });
});
