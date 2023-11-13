import { TestBed } from '@angular/core/testing';

import { DescricaoCursoService } from './descricao-curso.service';

describe('DescricaoCursoService', () => {
  let service: DescricaoCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescricaoCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
