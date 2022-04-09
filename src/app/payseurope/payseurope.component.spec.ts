import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayseuropeComponent } from './payseurope.component';

describe('PayseuropeComponent', () => {
  let component: PayseuropeComponent;
  let fixture: ComponentFixture<PayseuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayseuropeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayseuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
