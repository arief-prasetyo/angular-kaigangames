import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersBenefitPerksComponent } from './careers-benefit-perks.component';

describe('CareersBenefitPerksComponent', () => {
  let component: CareersBenefitPerksComponent;
  let fixture: ComponentFixture<CareersBenefitPerksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersBenefitPerksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersBenefitPerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
