import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoDocenteEstruturanteComponent } from './nucleo-docente-estruturante.component';

describe('NucleoDocenteEstruturanteComponent', () => {
  let component: NucleoDocenteEstruturanteComponent;
  let fixture: ComponentFixture<NucleoDocenteEstruturanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NucleoDocenteEstruturanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NucleoDocenteEstruturanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
