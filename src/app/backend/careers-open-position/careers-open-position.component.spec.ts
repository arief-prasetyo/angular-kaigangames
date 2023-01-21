import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersOpenPositionComponent } from './careers-open-position.component';

describe('CareersOpenPositionComponent', () => {
  let component: CareersOpenPositionComponent;
  let fixture: ComponentFixture<CareersOpenPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersOpenPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersOpenPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
