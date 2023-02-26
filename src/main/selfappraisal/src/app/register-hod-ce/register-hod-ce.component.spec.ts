import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHodCeComponent } from './register-hod-ce.component';

describe('RegisterHodCeComponent', () => {
  let component: RegisterHodCeComponent;
  let fixture: ComponentFixture<RegisterHodCeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHodCeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHodCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
