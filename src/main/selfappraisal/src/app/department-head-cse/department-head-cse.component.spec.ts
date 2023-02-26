import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHeadCseComponent } from './department-head-cse.component';

describe('DepartmentHeadCseComponent', () => {
  let component: DepartmentHeadCseComponent;
  let fixture: ComponentFixture<DepartmentHeadCseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentHeadCseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentHeadCseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
