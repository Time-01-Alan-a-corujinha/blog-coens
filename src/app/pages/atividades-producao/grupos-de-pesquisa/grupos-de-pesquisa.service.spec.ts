import { TestBed } from '@angular/core/testing';

import { GruposDePesquisaService } from './grupos-de-pesquisa.service';

describe('GruposDePesquisaService', () => {
  let service: GruposDePesquisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruposDePesquisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
