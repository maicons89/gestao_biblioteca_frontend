import { TestBed } from '@angular/core/testing';

import { ExemplarResolver } from './exemplar.resolver';

describe('ExemplarResolver', () => {
  let resolver: ExemplarResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExemplarResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
