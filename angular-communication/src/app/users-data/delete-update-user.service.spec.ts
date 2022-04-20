import { TestBed } from '@angular/core/testing';

import { DeleteUpdateUserService } from './delete-update-user.service';

describe('DeleteUpdateUserService', () => {
  let service: DeleteUpdateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteUpdateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
