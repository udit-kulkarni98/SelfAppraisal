import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHodExtcComponent } from './register-hod-extc.component';

describe('RegisterHodExtcComponent', () => {
  let component: RegisterHodExtcComponent;
  let fixture: ComponentFixture<RegisterHodExtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHodExtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHodExtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
