import { TestBed } from '@angular/core/testing';

import { DepartmentHeadCseGuard } from './department-head-cse.guard';

describe('DepartmentHeadCseGuard', () => {
  let guard: DepartmentHeadCseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DepartmentHeadCseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
