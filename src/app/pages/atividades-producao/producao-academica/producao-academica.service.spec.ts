import { TestBed } from '@angular/core/testing';

import { ProducaoAcademicaService } from './producao-academica.service';

describe('ProducaoAcademicaService', () => {
  let service: ProducaoAcademicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducaoAcademicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
