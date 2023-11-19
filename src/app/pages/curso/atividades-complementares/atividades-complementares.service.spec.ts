import { TestBed } from '@angular/core/testing';

import { AtividadesComplementaresService } from './atividades-complementares.service';

describe('AtividadesComplementaresService', () => {
  let service: AtividadesComplementaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtividadesComplementaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
