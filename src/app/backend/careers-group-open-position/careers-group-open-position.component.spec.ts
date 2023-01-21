import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersGroupOpenPositionComponent } from './careers-group-open-position.component';

describe('CareersGroupOpenPositionComponent', () => {
  let component: CareersGroupOpenPositionComponent;
  let fixture: ComponentFixture<CareersGroupOpenPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersGroupOpenPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersGroupOpenPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
