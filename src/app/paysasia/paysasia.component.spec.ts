import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysasiaComponent } from './paysasia.component';

describe('PaysasiaComponent', () => {
  let component: PaysasiaComponent;
  let fixture: ComponentFixture<PaysasiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysasiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
