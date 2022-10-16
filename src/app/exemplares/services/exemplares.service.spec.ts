import { TestBed } from '@angular/core/testing';

import { ExemplaresService } from './exemplares.service';

describe('ExemplaresService', () => {
  let service: ExemplaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemplaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
