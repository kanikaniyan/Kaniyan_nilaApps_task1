import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AssessmentData } from '../../model';

@Component({
  selector: 'app-course-outcome-attainment',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './course-outcome-attainment.component.html',
  styleUrl: './course-outcome-attainment.component.css'
})
export class CourseOutcomeAttainmentComponent implements OnInit {
  
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadAssessmentProgress();
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25
        },
        grid: {
          display: false,
        },
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    },
  };

  public barChartLabels: any[] = [];
  public barChartData: any[] = [
    {
      data: [],
      backgroundColor: [],
    }
  ];
  public barChartColors: any[] = [];

  assessmentProgress!: AssessmentData;

  loadAssessmentProgress(): void {

    this.courseService.getCourseData().subscribe((data) => {
      this.assessmentProgress = data.assessmentData;

      this.barChartLabels = this.assessmentProgress.courseOutcomeAttainments.map((item: any) => item.label);
      this.barChartData[0].data = this.assessmentProgress.courseOutcomeAttainments.map((item: any) => item.value);
      this.barChartData[0].backgroundColor = this.assessmentProgress.courseOutcomeAttainments.map((item: any) => item.color);
      this.barChartColors = [{ backgroundColor: this.assessmentProgress.courseOutcomeAttainments.map((item: any) => item.color) }];

    })
  }
}
