import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListRejectedCandidateByPositionComponent } from './filter-list-rejected-candidate-by-position.component';

describe('FilterListRejectedCandidateByPositionComponent', () => {
  let component: FilterListRejectedCandidateByPositionComponent;
  let fixture: ComponentFixture<FilterListRejectedCandidateByPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListRejectedCandidateByPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListRejectedCandidateByPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
