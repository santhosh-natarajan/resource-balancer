import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListRejectedCandidateComponent } from './filter-list-rejected-candidate.component';

describe('FilterListRejectedCandidateComponent', () => {
  let component: FilterListRejectedCandidateComponent;
  let fixture: ComponentFixture<FilterListRejectedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListRejectedCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListRejectedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
