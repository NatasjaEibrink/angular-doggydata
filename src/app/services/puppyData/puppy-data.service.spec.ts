import { TestBed } from '@angular/core/testing';

import { PuppyDataService } from './puppy-data.service';

describe('PuppyDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuppyDataService = TestBed.get(PuppyDataService);
    expect(service).toBeTruthy();
  });
});
