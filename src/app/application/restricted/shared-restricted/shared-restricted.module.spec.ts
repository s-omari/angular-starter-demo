import { SharedRestrictedModule } from './shared-restricted.module';

describe('SharedRestrictedModule', () => {
  let sharedRestrictedModule: SharedRestrictedModule;

  beforeEach(() => {
    sharedRestrictedModule = new SharedRestrictedModule();
  });

  it('should create an instance', () => {
    expect(sharedRestrictedModule).toBeTruthy();
  });
});
