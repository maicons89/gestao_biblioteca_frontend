import { TestBed } from '@angular/core/testing';

import { AutorResolver } from './autor.resolver';

describe('AutorResolver', () => {
  let resolver: AutorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AutorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
