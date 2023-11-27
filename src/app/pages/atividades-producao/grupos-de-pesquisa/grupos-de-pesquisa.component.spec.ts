import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposDePesquisaComponent } from './grupos-de-pesquisa.component';

describe('GruposDePesquisaComponent', () => {
  let component: GruposDePesquisaComponent;
  let fixture: ComponentFixture<GruposDePesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposDePesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposDePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
