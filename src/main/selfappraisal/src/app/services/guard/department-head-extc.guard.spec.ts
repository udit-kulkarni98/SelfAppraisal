import { TestBed } from '@angular/core/testing';

import { DepartmentHeadExtcGuard } from './department-head-extc.guard';

describe('DepartmentHeadExtcGuard', () => {
  let guard: DepartmentHeadExtcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DepartmentHeadExtcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
