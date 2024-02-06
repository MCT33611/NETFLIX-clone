import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieVideoPopupComponent } from './movie-video-popup.component';

describe('MovieVideoPopupComponent', () => {
  let component: MovieVideoPopupComponent;
  let fixture: ComponentFixture<MovieVideoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieVideoPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieVideoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
