import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersFeaturedJobComponent } from './careers-featured-job.component';

describe('CareersFeaturedJobComponent', () => {
  let component: CareersFeaturedJobComponent;
  let fixture: ComponentFixture<CareersFeaturedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersFeaturedJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersFeaturedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
