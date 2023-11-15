import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosExtensaoComponent } from './projetos-extensao.component';

describe('ProjetosExtensaoComponent', () => {
  let component: ProjetosExtensaoComponent;
  let fixture: ComponentFixture<ProjetosExtensaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetosExtensaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosExtensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
