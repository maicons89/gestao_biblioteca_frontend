import { TestBed } from '@angular/core/testing';

import { DevolucaoResolver } from './devolucoes.resolver';

describe('DevolucaoResolver', () => {
  let resolver: DevolucaoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DevolucaoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
