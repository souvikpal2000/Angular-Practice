import { TestBed } from '@angular/core/testing';

import { UserPositionService } from './user-position.service';

describe('UserPositionService', () => {
  let service: UserPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
