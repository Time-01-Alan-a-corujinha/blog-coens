import { TestBed } from '@angular/core/testing';

import { EstagioCurricularService } from './estagio-curricular.service';

describe('EstagioCurricularService', () => {
  let service: EstagioCurricularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstagioCurricularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
