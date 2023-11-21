import { TestBed } from '@angular/core/testing';

import { NucleoDocenteEstruturanteService } from './nucleo-docente-estruturante.service';

describe('NucleoDocenteEstruturanteService', () => {
  let service: NucleoDocenteEstruturanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NucleoDocenteEstruturanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
