import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCandidateByGenderComponent } from './filter-candidate-by-gender.component';

describe('FilterCandidateByGenderComponent', () => {
  let component: FilterCandidateByGenderComponent;
  let fixture: ComponentFixture<FilterCandidateByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCandidateByGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCandidateByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
