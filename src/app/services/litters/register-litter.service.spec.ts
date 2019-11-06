import { TestBed } from '@angular/core/testing';

import { RegisterLitterService } from './register-litter.service';

describe('RegisterLitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterLitterService = TestBed.get(RegisterLitterService);
    expect(service).toBeTruthy();
  });
});
