import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHeadItComponent } from './department-head-it.component';

describe('DepartmentHeadItComponent', () => {
  let component: DepartmentHeadItComponent;
  let fixture: ComponentFixture<DepartmentHeadItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentHeadItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentHeadItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
