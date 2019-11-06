import { TestBed } from '@angular/core/testing';

import { DogDetailsService } from './dog-details.service';

describe('DogDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogDetailsService = TestBed.get(DogDetailsService);
    expect(service).toBeTruthy();
  });
});
