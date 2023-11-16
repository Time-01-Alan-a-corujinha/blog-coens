import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagioCurricularComponent } from './estagio-curricular.component';

describe('EstagioCurricularComponent', () => {
  let component: EstagioCurricularComponent;
  let fixture: ComponentFixture<EstagioCurricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstagioCurricularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstagioCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
