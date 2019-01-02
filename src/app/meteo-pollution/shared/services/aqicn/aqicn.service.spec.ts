import { TestBed } from '@angular/core/testing';

import { AqicnService } from './aqicn.service';

describe('AqicnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AqicnService = TestBed.get(AqicnService);
    expect(service).toBeTruthy();
  });
});
