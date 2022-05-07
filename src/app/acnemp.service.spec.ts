import { TestBed } from '@angular/core/testing';

import { AcnempService } from './acnemp.service';

describe('AcnempService', () => {
  let service: AcnempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcnempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
