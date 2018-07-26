import { CrudModule } from './crud.module';

describe('CrudModule', () => {
  let crudModule: CrudModule;

  beforeEach(() => {
    crudModule = new CrudModule();
  });

  it('should create an instance', () => {
    expect(crudModule).toBeTruthy();
  });
});
