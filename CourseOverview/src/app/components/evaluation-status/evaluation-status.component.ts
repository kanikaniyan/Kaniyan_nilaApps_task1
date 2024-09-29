import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { AssessmentProgress } from '../../model';

@Component({
  selector: 'app-evaluation-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evaluation-status.component.html',
  styleUrl: './evaluation-status.component.css'
})
export class EvaluationStatusComponent {

  assessmentProgress: AssessmentProgress[] | [] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadAssessmentProgress();
  }

  loadAssessmentProgress(): void {

    this.courseService.getCourseData().subscribe((data) => {
      this.assessmentProgress = data.assessmentProgress;
    });

  }

  getTotalTasks(tasks: any[]): number {
    return tasks.length;
  }

  getCompletedTasks(tasks: any[]): number {
    return tasks.filter(task => task.status === 'completed').length;
  }
}
