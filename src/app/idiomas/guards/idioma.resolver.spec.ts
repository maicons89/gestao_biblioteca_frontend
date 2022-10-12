import { TestBed } from '@angular/core/testing';

import { IdiomaResolver } from './idioma.resolver';

describe('IdiomaResolver', () => {
  let resolver: IdiomaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IdiomaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
