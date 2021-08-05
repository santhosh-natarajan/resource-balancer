import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCandidateApplicationIdComponent } from './generate-candidate-application-id.component';

describe('GenerateCandidateApplicationIdComponent', () => {
  let component: GenerateCandidateApplicationIdComponent;
  let fixture: ComponentFixture<GenerateCandidateApplicationIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateCandidateApplicationIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateCandidateApplicationIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
