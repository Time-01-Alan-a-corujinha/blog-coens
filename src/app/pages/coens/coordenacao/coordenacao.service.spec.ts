import { TestBed } from '@angular/core/testing';

import { CoordenacaoService } from './coordenacao.service';

describe('CoordenacaoService', () => {
  let service: CoordenacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordenacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
