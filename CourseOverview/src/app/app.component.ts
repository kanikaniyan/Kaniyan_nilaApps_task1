import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CourseService } from './services/course.service';
import { CommonModule } from '@angular/common';
import { AssessmentProgressComponent } from './components/assessment-progress/assessment-progress.component';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EvaluationStatusComponent } from './components/evaluation-status/evaluation-status.component';
import { CourseOutcomeAttainmentComponent } from './components/course-outcome-attainment/course-outcome-attainment.component';
import { OverallCourseOutcomeAttainmentComponent } from './components/overall-course-outcome-attainment/overall-course-outcome-attainment.component';
import { HeaderComponent } from './components/header/header.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  courseData: any;

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