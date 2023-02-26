import { TestBed } from '@angular/core/testing';

import { DepartmentHeadEeGuard } from './department-head-ee.guard';

describe('DepartmentHeadEeGuard', () => {
  let guard: DepartmentHeadEeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DepartmentHeadEeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
