import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterprincipalComponent } from './registerprincipal.component';

describe('RegisterprincipalComponent', () => {
  let component: RegisterprincipalComponent;
  let fixture: ComponentFixture<RegisterprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
