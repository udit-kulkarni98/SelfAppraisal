import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHeadAshComponent } from './department-head-ash.component';

describe('DepartmentHeadAshComponent', () => {
  let component: DepartmentHeadAshComponent;
  let fixture: ComponentFixture<DepartmentHeadAshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentHeadAshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentHeadAshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
