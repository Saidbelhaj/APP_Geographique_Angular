import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysOceaniaComponent } from './pays-oceania.component';

describe('PaysOceaniaComponent', () => {
  let component: PaysOceaniaComponent;
  let fixture: ComponentFixture<PaysOceaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysOceaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysOceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
