import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHodItComponent } from './register-hod-it.component';

describe('RegisterHodItComponent', () => {
  let component: RegisterHodItComponent;
  let fixture: ComponentFixture<RegisterHodItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHodItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHodItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
