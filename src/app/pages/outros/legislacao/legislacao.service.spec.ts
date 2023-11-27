import { TestBed } from '@angular/core/testing';

import { LegislacaoService } from './legislacao.service';

describe('LegislacaoService', () => {
  let service: LegislacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegislacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
