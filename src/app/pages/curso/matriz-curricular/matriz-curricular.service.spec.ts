import { TestBed } from '@angular/core/testing';

import { MatrizCurricularService } from './matriz-curricular.service';

describe('MatrizCurricularService', () => {
  let service: MatrizCurricularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrizCurricularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
