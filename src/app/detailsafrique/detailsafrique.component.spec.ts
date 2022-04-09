import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsafriqueComponent } from './detailsafrique.component';

describe('DetailsafriqueComponent', () => {
  let component: DetailsafriqueComponent;
  let fixture: ComponentFixture<DetailsafriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsafriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsafriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
