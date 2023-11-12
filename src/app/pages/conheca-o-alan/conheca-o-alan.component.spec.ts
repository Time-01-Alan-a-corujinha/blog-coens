import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecaOAlanComponent } from './conheca-o-alan.component';

describe('ConhecaOAlanComponent', () => {
  let component: ConhecaOAlanComponent;
  let fixture: ComponentFixture<ConhecaOAlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConhecaOAlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConhecaOAlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
