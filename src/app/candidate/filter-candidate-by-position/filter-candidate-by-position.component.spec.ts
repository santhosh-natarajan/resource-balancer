import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCandidateByPositionComponent } from './filter-candidate-by-position.component';

describe('FilterCandidateByPositionComponent', () => {
  let component: FilterCandidateByPositionComponent;
  let fixture: ComponentFixture<FilterCandidateByPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCandidateByPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCandidateByPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
