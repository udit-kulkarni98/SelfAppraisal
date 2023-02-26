import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHeadCeComponent } from './department-head-ce.component';

describe('DepartmentHeadCeComponent', () => {
  let component: DepartmentHeadCeComponent;
  let fixture: ComponentFixture<DepartmentHeadCeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentHeadCeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentHeadCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
