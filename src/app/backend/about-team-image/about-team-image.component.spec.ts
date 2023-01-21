import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamImageComponent } from './about-team-image.component';

describe('AboutTeamImageComponent', () => {
  let component: AboutTeamImageComponent;
  let fixture: ComponentFixture<AboutTeamImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTeamImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTeamImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
