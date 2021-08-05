import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCandidateByCityComponent } from './filter-candidate-by-city.component';

describe('FilterCandidateByCityComponent', () => {
  let component: FilterCandidateByCityComponent;
  let fixture: ComponentFixture<FilterCandidateByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCandidateByCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCandidateByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
