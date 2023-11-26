import { TestBed } from '@angular/core/testing';

import { RecentesService } from './recentes.service';

describe('RecentesService', () => {
  let service: RecentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
