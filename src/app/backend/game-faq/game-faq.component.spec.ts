import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFaqComponent } from './game-faq.component';

describe('GameFaqComponent', () => {
  let component: GameFaqComponent;
  let fixture: ComponentFixture<GameFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
