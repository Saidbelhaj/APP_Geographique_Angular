import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysafriqueComponent } from './paysafrique.component';

describe('PaysafriqueComponent', () => {
  let component: PaysafriqueComponent;
  let fixture: ComponentFixture<PaysafriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysafriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysafriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
