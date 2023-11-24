import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAcademicoComponent } from './centro-academico.component';

describe('CentroAcademicoComponent', () => {
  let component: CentroAcademicoComponent;
  let fixture: ComponentFixture<CentroAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
