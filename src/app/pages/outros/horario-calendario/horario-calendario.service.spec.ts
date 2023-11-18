import { TestBed } from '@angular/core/testing';

import { HorarioCalendarioService } from './horario-calendario.service';

describe('HorarioCalendarioService', () => {
  let service: HorarioCalendarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorarioCalendarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
