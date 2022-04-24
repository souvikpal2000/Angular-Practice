import { TestBed } from '@angular/core/testing';

import { AddUpdateDeleteService } from './add-update-delete.service';

describe('AddUpdateDeleteService', () => {
  let service: AddUpdateDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUpdateDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
