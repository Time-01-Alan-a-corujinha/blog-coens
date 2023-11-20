import { TestBed } from '@angular/core/testing';

import { CentroAcademicoService } from './centro-academico.service';

describe('CentroAcademicoService', () => {
  let service: CentroAcademicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroAcademicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
