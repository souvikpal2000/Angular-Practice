import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeDataComponent } from './youtube-data.component';

describe('YoutubeDataComponent', () => {
  let component: YoutubeDataComponent;
  let fixture: ComponentFixture<YoutubeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
