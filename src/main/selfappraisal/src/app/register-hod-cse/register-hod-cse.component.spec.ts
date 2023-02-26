import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHodCseComponent } from './register-hod-cse.component';

describe('RegisterHodCseComponent', () => {
  let component: RegisterHodCseComponent;
  let fixture: ComponentFixture<RegisterHodCseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHodCseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHodCseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
