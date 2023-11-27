import { TestBed } from '@angular/core/testing';

import { PosGraduacaoService } from './pos-graduacao.service';

describe('PosGraduacaoService', () => {
  let service: PosGraduacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosGraduacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
