import { TestBed } from '@angular/core/testing';

import { InternacionalizacaoService } from './internacionalizacao.service';

describe('InternacionalizacaoService', () => {
  let service: InternacionalizacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternacionalizacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
