import { TestBed } from '@angular/core/testing';

import { DepartmentHeadAshGuard } from './department-head-ash.guard';

describe('DepartmentHeadAshGuard', () => {
  let guard: DepartmentHeadAshGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DepartmentHeadAshGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
