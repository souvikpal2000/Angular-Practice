import { TestBed } from '@angular/core/testing';

import { AddVideoService } from './add-video.service';

describe('AddVideoService', () => {
  let service: AddVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
