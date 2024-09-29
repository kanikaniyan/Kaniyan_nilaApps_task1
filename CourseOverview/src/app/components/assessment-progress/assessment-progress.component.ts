import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { CourseService } from '../../services/course.service';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import { ChartConfiguration } from 'chart.js';
import { AssessmentProgress } from '../../model';

Chart.register(...registerables);

@Component({
  selector: 'app-assessment-progress',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './assessment-progress.component.html',
  styleUrl: './assessment-progress.component.css'
})
export class AssessmentProgressComponent implements OnInit {

public barChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
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
        stepSize: 25,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        generateLabels: (chart) => {
          return [
            {
              text: 'Pending',
              fillStyle: '#d3d3d3',
              strokeStyle: '#d3d3d3',
              lineWidth: 1,
            },
            {
              text: 'Completed',
              fillStyle: '#91b07c',
              strokeStyle: '#91b07c',
              lineWidth: 1,
            }
          ];
        }
      }
    }
  },
  layout: {
        padding: 5
  }
};

  public barChartLabels: string[] = []; // This will hold categories: Assignment, Quiz, Presentation, Lab
  public barChartType: any = 'bar';
  public barChartData: any[] = [];

  assessmentProgress: AssessmentProgress[] | [] = []; 

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadAssessmentProgress();
  }

  loadAssessmentProgress(): void {

    this.courseService.getCourseData().subscribe((data) => {
      this.assessmentProgress = data.assessmentProgress;

      let chartData: any[] = [];

      // Clear the chart labels and data before pushing new data
      this.barChartLabels = [];

      // Iterate over each category to populate chart data
      this.assessmentProgress.forEach((category: any) => {
        // For each category, we need to push tasks as individual bars
        this.barChartLabels.push(category.category);
        category.tasks.forEach((task: any) => {

          let barData: any = {
            label: task.task,
            barPercentage: 0.6,
            categoryPercentage: 1,
            parsing: {
              yAxisKey: task.task
            }
          };
          let idx = chartData.findIndex((cat: any) => cat.x == category.category);
          if (idx == -1) {
            let indData: any = { x: category.category };
            indData[task.task] = task.status === 'completed' ? task.completed : task.pending;
            chartData.push(indData);
          } else {
            chartData[idx][task.task] = task.status === 'completed' ? task.completed : task.pending;
          }
          task.status === 'completed' ? barData['backgroundColor'] = '#91b07c' : barData['backgroundColor'] = '#d3d3d3';
          barData.data = chartData;
          this.barChartData.push(barData);

        })  

      });

    });
  }

}
