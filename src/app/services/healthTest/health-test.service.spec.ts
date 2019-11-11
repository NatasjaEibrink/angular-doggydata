import { TestBed } from '@angular/core/testing';

import { HealthTestService } from './health-test.service';

describe('HealthTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthTestService = TestBed.get(HealthTestService);
    expect(service).toBeTruthy();
  });
});
