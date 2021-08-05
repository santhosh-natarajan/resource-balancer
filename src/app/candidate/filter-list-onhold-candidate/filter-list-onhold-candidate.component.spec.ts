import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListOnholdCandidateComponent } from './filter-list-onhold-candidate.component';

describe('FilterListOnholdCandidateComponent', () => {
  let component: FilterListOnholdCandidateComponent;
  let fixture: ComponentFixture<FilterListOnholdCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListOnholdCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListOnholdCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
