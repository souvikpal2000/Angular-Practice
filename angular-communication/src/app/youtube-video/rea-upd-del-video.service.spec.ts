import { TestBed } from '@angular/core/testing';

import { ReaUpdDelVideoService } from './rea-upd-del-video.service';

describe('ReaUpdDelVideoService', () => {
  let service: ReaUpdDelVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaUpdDelVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
