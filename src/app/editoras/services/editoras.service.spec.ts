import { TestBed } from '@angular/core/testing';

import { EditorasService } from './editoras.service';

describe('EditorasService', () => {
  let service: EditorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
