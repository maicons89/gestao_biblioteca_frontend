import { TestBed } from '@angular/core/testing';

import { AssuntosService } from './assuntos.service';

describe('AssuntosService', () => {
  let service: AssuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
