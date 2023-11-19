import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesComplementaresComponent } from './atividades-complementares.component';

describe('AtividadesComplementaresComponent', () => {
  let component: AtividadesComplementaresComponent;
  let fixture: ComponentFixture<AtividadesComplementaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesComplementaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesComplementaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
