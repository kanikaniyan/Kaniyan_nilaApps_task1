import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { AssessmentProgressComponent } from '../assessment-progress/assessment-progress.component';
import { AttendanceReportComponent } from '../attendance-report/attendance-report.component';
import { OverallCourseOutcomeAttainmentComponent } from '../overall-course-outcome-attainment/overall-course-outcome-attainment.component';
import { CourseOutcomeAttainmentComponent } from '../course-outcome-attainment/course-outcome-attainment.component';
import { EvaluationStatusComponent } from '../evaluation-status/evaluation-status.component';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { Course } from '../../model';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, AssessmentProgressComponent, AttendanceReportComponent, EvaluationStatusComponent, 
    CourseOutcomeAttainmentComponent, OverallCourseOutcomeAttainmentComponent, SkeletonComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent implements OnInit {
  courseData: Course | null = null;

  isObeReport: boolean = false;
  isLoading: boolean = true;
  isLoading1: boolean = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // Fetch course data on component initialization
    this.courseService.getCourseData().subscribe(data => {
      console.log(data);
      this.courseData = data.courses[0];

        setTimeout(() => {
          this.isLoading = false;
          this.isLoading1 = false;
        }, 1000);
    });
  }

  toggleObeReport() {
      this.isLoading1 = true;
      setTimeout(() => {
      this.isObeReport = !this.isObeReport;
      this.isLoading1 = false;
    }, 1000);
  }
}
