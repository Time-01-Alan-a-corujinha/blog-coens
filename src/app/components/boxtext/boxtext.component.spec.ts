import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxtextComponent } from './boxtext.component';

describe('BoxtextComponent', () => {
  let component: BoxtextComponent;
  let fixture: ComponentFixture<BoxtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
