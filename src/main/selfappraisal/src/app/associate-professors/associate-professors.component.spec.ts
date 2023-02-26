import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateProfessorsComponent } from './associate-professors.component';

describe('AssociateProfessorsComponent', () => {
  let component: AssociateProfessorsComponent;
  let fixture: ComponentFixture<AssociateProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateProfessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
