import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListSelectedCandidateByPositionComponent } from './filter-list-selected-candidate-by-position.component';

describe('FilterListSelectedCandidateByPositionComponent', () => {
  let component: FilterListSelectedCandidateByPositionComponent;
  let fixture: ComponentFixture<FilterListSelectedCandidateByPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListSelectedCandidateByPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListSelectedCandidateByPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
