import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHodEeComponent } from './register-hod-ee.component';

describe('RegisterHodEeComponent', () => {
  let component: RegisterHodEeComponent;
  let fixture: ComponentFixture<RegisterHodEeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHodEeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHodEeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
