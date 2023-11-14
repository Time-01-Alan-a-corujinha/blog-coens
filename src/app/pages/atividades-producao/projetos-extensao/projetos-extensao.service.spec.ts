import { TestBed } from '@angular/core/testing';

import { ProjetosExtensaoService } from './projetos-extensao.service';

describe('ProjetosExtensaoService', () => {
  let service: ProjetosExtensaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetosExtensaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
