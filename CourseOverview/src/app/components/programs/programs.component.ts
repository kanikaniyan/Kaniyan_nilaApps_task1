import { Component, HostListener, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AssessmentProgressComponent } from '../assessment-progress/assessment-progress.component';
import { AttendanceReportComponent } from '../attendance-report/attendance-report.component';
import { OverallCourseOutcomeAttainmentComponent } from '../overall-course-outcome-attainment/overall-course-outcome-attainment.component';
import { CourseOutcomeAttainmentComponent } from '../course-outcome-attainment/course-outcome-attainment.component';
import { EvaluationStatusComponent } from '../evaluation-status/evaluation-status.component';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { Course } from '../../model';
import { delay } from 'rxjs';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, AssessmentProgressComponent, AttendanceReportComponent, EvaluationStatusComponent,
    CourseOutcomeAttainmentComponent, OverallCourseOutcomeAttainmentComponent, SkeletonComponent,
  ],
  templateUrl: './programs.component.html',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
      })),
      transition('expanded <=> collapsed', [
        animate('300ms ease-in-out')
      ]),
    ]),
    trigger('rotateIcon', [
      state('down', style({ transform: 'rotate(0deg)' })),
      state('up', style({ transform: 'rotate(180deg)' })),
      transition('up <=> down', animate('300ms ease-in-out')),
    ]),
  ],
  styleUrl: './programs.component.css',
})

export class ProgramsComponent implements OnInit {
  courseData: Course | null = null;

  isObeReport: boolean = false;
  isLoading: boolean = true;
  isLoading1: boolean = true;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // Fetch course data on component initialization
    this.courseService.getCourseData()
      .pipe(delay(1000))
      .subscribe(data => {
        console.log(data);
        this.courseData = data.courses[0];

        this.isLoading = false;
        this.isLoading1 = false;

      });

    this.checkScreenSize();
  }

  isExpanded = false;
  isMobile = false;
  isTabView = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isTabView = window.innerWidth < 1024 && window.innerWidth >= 768; 
    this.isMobile = window.innerWidth < 1024;
    if (!this.isMobile) {
      this.isExpanded = true;
    }
  }

  toggleExpand() {
    if (this.isMobile) {
      this.isExpanded = !this.isExpanded;
    }
  }

  toggleObeReport() {
    this.isLoading1 = true;
    setTimeout(() => {
      this.isObeReport = !this.isObeReport;
      this.isLoading1 = false;
    }, 1000);
  }
}
