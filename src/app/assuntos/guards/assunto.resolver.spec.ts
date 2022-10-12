import { TestBed } from '@angular/core/testing';

import { AssuntoResolver } from './assunto.resolver';

describe('AssuntoResolver', () => {
  let resolver: AssuntoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AssuntoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
