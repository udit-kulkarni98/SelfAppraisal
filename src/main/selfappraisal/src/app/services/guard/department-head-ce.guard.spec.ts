import { TestBed } from '@angular/core/testing';

import { DepartmentHeadCeGuard } from './department-head-ce.guard';

describe('DepartmentHeadCeGuard', () => {
  let guard: DepartmentHeadCeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DepartmentHeadCeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
