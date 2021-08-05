import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListSelectedCandidateComponent } from './filter-list-selected-candidate.component';

describe('FilterListSelectedCandidateComponent', () => {
  let component: FilterListSelectedCandidateComponent;
  let fixture: ComponentFixture<FilterListSelectedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListSelectedCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListSelectedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
