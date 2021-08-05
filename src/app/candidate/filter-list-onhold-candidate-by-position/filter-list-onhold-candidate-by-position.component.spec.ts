import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListOnholdCandidateByPositionComponent } from './filter-list-onhold-candidate-by-position.component';

describe('FilterListOnholdCandidateByPositionComponent', () => {
  let component: FilterListOnholdCandidateByPositionComponent;
  let fixture: ComponentFixture<FilterListOnholdCandidateByPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListOnholdCandidateByPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListOnholdCandidateByPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
