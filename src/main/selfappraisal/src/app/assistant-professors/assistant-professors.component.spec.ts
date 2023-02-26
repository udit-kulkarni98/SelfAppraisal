import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantProfessorsComponent } from './assistant-professors.component';

describe('AssistantProfessorsComponent', () => {
  let component: AssistantProfessorsComponent;
  let fixture: ComponentFixture<AssistantProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistantProfessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
