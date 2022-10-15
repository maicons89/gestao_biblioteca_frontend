import { TestBed } from '@angular/core/testing';

import { LivroResolver } from './livro.resolver';

describe('LivroResolver', () => {
  let resolver: LivroResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LivroResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
