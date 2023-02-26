import { TestBed } from '@angular/core/testing';

import { DepartmentHeadItGuard } from './department-head-it.guard';

describe('DepartmentHeadItGuard', () => {
  let guard: DepartmentHeadItGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DepartmentHeadItGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
