import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogomarcasComponent } from './logomarcas.component';

describe('LogomarcasComponent', () => {
  let component: LogomarcasComponent;
  let fixture: ComponentFixture<LogomarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogomarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogomarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
