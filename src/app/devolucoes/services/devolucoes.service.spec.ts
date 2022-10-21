import { TestBed } from '@angular/core/testing';

import { DevolucoesService } from './devolucoes.service';

describe('DevolucoesService', () => {
  let service: DevolucoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevolucoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
