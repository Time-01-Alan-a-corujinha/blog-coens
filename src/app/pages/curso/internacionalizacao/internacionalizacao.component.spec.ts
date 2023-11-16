import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionalizacaoComponent } from './internacionalizacao.component';

describe('InternacionalizacaoComponent', () => {
  let component: InternacionalizacaoComponent;
  let fixture: ComponentFixture<InternacionalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternacionalizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternacionalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
