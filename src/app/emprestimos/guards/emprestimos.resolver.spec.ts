import { TestBed } from '@angular/core/testing';

import { EmprestimoResolver } from './emprestimos.resolver';

describe('EmprestimoResolver', () => {
  let resolver: EmprestimoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EmprestimoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
