import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHodAshComponent } from './register-hod-ash.component';

describe('RegisterHodAshComponent', () => {
  let component: RegisterHodAshComponent;
  let fixture: ComponentFixture<RegisterHodAshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHodAshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHodAshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
