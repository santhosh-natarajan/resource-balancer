import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCandidateByApplicationDateComponent } from './filter-candidate-by-application-date.component';

describe('FilterCandidateByApplicationDateComponent', () => {
  let component: FilterCandidateByApplicationDateComponent;
  let fixture: ComponentFixture<FilterCandidateByApplicationDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCandidateByApplicationDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCandidateByApplicationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
