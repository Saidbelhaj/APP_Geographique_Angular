import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsameriqueComponent } from './detailsamerique.component';

describe('DetailsameriqueComponent', () => {
  let component: DetailsameriqueComponent;
  let fixture: ComponentFixture<DetailsameriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsameriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsameriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
