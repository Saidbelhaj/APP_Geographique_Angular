import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsasiaComponent } from './detailsasia.component';

describe('DetailsasiaComponent', () => {
  let component: DetailsasiaComponent;
  let fixture: ComponentFixture<DetailsasiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsasiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
