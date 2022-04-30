import { TestBed } from '@angular/core/testing';

import { UserlogedService } from './userloged.service';

describe('UserlogedService', () => {
  let service: UserlogedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserlogedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
