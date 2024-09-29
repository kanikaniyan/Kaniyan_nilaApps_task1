import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallCourseOutcomeAttainmentComponent } from './overall-course-outcome-attainment.component';

describe('OverallCourseOutcomeAttainmentComponent', () => {
  let component: OverallCourseOutcomeAttainmentComponent;
  let fixture: ComponentFixture<OverallCourseOutcomeAttainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallCourseOutcomeAttainmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallCourseOutcomeAttainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
