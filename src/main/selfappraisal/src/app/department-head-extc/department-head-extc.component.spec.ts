import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHeadExtcComponent } from './department-head-extc.component';

describe('DepartmentHeadExtcComponent', () => {
  let component: DepartmentHeadExtcComponent;
  let fixture: ComponentFixture<DepartmentHeadExtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentHeadExtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentHeadExtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
