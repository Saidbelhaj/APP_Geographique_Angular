import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOceaniaComponent } from './details-oceania.component';

describe('DetailsOceaniaComponent', () => {
  let component: DetailsOceaniaComponent;
  let fixture: ComponentFixture<DetailsOceaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOceaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
