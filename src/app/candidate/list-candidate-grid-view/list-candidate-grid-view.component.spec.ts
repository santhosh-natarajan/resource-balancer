import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCandidateGridViewComponent } from './list-candidate-grid-view.component';

describe('ListCandidateGridViewComponent', () => {
  let component: ListCandidateGridViewComponent;
  let fixture: ComponentFixture<ListCandidateGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCandidateGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCandidateGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
