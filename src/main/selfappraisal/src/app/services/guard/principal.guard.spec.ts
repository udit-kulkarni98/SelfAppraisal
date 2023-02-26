import { TestBed } from '@angular/core/testing';

import { PrincipalGuard } from './principal.guard';

describe('PrincipalGuard', () => {
  let guard: PrincipalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrincipalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
