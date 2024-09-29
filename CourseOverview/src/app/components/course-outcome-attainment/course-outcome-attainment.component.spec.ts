import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOutcomeAttainmentComponent } from './course-outcome-attainment.component';

describe('CourseOutcomeAttainmentComponent', () => {
  let component: CourseOutcomeAttainmentComponent;
  let fixture: ComponentFixture<CourseOutcomeAttainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseOutcomeAttainmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseOutcomeAttainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
