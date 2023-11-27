import { TestBed } from '@angular/core/testing';

import { ColegiadoService } from './colegiado.service';

describe('ColegiadoService', () => {
  let service: ColegiadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColegiadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
