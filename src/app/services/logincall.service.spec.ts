import { TestBed } from '@angular/core/testing';

import { LogincallService } from './logincall.service';

describe('LogincallService', () => {
  let service: LogincallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogincallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
