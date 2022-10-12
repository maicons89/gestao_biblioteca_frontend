import { TestBed } from '@angular/core/testing';

import { EditoraResolver } from './editora.resolver';

describe('EditoraResolver', () => {
  let resolver: EditoraResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditoraResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
