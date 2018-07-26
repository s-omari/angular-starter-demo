import { RestrictedModule } from './restricted.module';

describe('RestrictedModule', () => {
  let restrictedModule: RestrictedModule;

  beforeEach(() => {
    restrictedModule = new RestrictedModule();
  });

  it('should create an instance', () => {
    expect(restrictedModule).toBeTruthy();
  });
});
