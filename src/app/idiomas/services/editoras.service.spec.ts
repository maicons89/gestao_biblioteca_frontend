import { TestBed } from '@angular/core/testing';

import { IdiomasService } from './idiomas.service';

describe('IdiomasService', () => {
  let service: IdiomasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdiomasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
