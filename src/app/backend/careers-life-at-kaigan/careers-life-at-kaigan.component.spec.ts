import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersLifeAtKaiganComponent } from './careers-life-at-kaigan.component';

describe('CareersLifeAtKaiganComponent', () => {
  let component: CareersLifeAtKaiganComponent;
  let fixture: ComponentFixture<CareersLifeAtKaiganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersLifeAtKaiganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersLifeAtKaiganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
