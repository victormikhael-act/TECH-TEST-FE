import { TestBed } from '@angular/core/testing';

import { EmpdetserviceService } from './empdetservice.service';

describe('EmpdetserviceService', () => {
  let service: EmpdetserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpdetserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
