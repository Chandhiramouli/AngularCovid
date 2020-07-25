import { TestBed } from '@angular/core/testing';

import { EnduserService } from './enduser.service';

describe('EnduserService', () => {
  let service: EnduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
