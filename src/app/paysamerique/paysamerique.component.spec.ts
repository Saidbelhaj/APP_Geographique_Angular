import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysameriqueComponent } from './paysamerique.component';

describe('PaysameriqueComponent', () => {
  let component: PaysameriqueComponent;
  let fixture: ComponentFixture<PaysameriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysameriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysameriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
