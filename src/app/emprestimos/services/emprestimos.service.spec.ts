import { TestBed } from '@angular/core/testing';

import { EmprestimosService } from './emprestimos.service';

describe('EmprestimosService', () => {
  let service: EmprestimosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmprestimosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
