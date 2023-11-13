import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoCursoComponent } from './descricao-curso.component';

describe('DescricaoCursoComponent', () => {
  let component: DescricaoCursoComponent;
  let fixture: ComponentFixture<DescricaoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
