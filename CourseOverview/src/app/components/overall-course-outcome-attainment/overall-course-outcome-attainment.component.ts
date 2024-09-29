import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CourseService } from '../../services/course.service';
import { ChartConfiguration } from 'chart.js';
import { AssessmentData } from '../../model';

@Component({
  selector: 'app-overall-course-outcome-attainment',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './overall-course-outcome-attainment.component.html',
  styleUrl: './overall-course-outcome-attainment.component.css'
})
export class OverallCourseOutcomeAttainmentComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadAssessmentProgress();
  }

  public doughnutChartLabels: any[] = [];
  public doughnutChartLabels1: any[] = [];
  public doughnutChartData: any[] = [];
  public doughnutChartColors: any[] = [
    {
      backgroundColor: []  // Specify individual segment colors here
    }
  ];
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    }
  };
  
  doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [];
  doughnutChartDatasets1: ChartConfiguration<'doughnut'>['data']['datasets'] = [];

  overallOutcomeCategories: any[] = [];
  assessmentProgress!: AssessmentData;

  loadAssessmentProgress(): void {

    this.courseService.getCourseData().subscribe((data) => {
      this.assessmentProgress = data.assessmentData;

      this.doughnutChartLabels = this.assessmentProgress.overallCourseOutcomeAttainment.categories.map((item: any) => item.label);
      this.doughnutChartData = this.assessmentProgress.overallCourseOutcomeAttainment.categories.map((item: any) => item.value);
      this.doughnutChartColors[0].backgroundColor = this.assessmentProgress.overallCourseOutcomeAttainment.categories.map((item: any) => item.color);
      this.overallOutcomeCategories = this.assessmentProgress.overallCourseOutcomeAttainment.categories;

      this.doughnutChartDatasets = [
        {
          data: this.doughnutChartData,
          label: "Performance",
          backgroundColor: this.doughnutChartColors[0].backgroundColor,
          hoverOffset: 4
        }
      ];

      this.doughnutChartLabels1 = ["5", "12"];
      this.doughnutChartDatasets1 = [
        {
          data: [5, 12],
          label: "Evaluation Progress",
          backgroundColor: ["#9FC286", "#EBECEE"],
          hoverOffset: 4
        }
      ]
    })
  }

}
