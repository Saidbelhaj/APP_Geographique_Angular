import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailseuropeComponent } from './detailseurope.component';

describe('DetailseuropeComponent', () => {
  let component: DetailseuropeComponent;
  let fixture: ComponentFixture<DetailseuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailseuropeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailseuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
