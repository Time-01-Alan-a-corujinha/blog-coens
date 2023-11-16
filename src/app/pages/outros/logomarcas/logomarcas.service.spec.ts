import { TestBed } from '@angular/core/testing';

import { LogomarcasService } from './logomarcas.service';

describe('LogomarcasService', () => {
  let service: LogomarcasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogomarcasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
