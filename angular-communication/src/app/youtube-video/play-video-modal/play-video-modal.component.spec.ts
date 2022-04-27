import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVideoModalComponent } from './play-video-modal.component';

describe('PlayVideoModalComponent', () => {
  let component: PlayVideoModalComponent;
  let fixture: ComponentFixture<PlayVideoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayVideoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayVideoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
