import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHeadEeComponent } from './department-head-ee.component';

describe('DepartmentHeadEeComponent', () => {
  let component: DepartmentHeadEeComponent;
  let fixture: ComponentFixture<DepartmentHeadEeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentHeadEeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentHeadEeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
