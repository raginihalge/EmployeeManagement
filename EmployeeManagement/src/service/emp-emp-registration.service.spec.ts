import { TestBed } from '@angular/core/testing';

import { EmpEmpRegistrationService } from './emp-emp-registration.service';

describe('EmpEmpRegistrationService', () => {
  let service: EmpEmpRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpEmpRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
