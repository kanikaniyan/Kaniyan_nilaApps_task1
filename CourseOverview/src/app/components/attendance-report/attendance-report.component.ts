import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { Attendance } from '../../model';

Chart.register(...registerables);

@Component({
  selector: 'app-attendance-report',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './attendance-report.component.html',
  styleUrl: './attendance-report.component.css'
})
export class AttendanceReportComponent implements OnInit {

  attendance: Attendance[] | [] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadAttendanceReport();
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Weeks', // Label for the x-axis
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Attendance', // Label for the y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      }
    },
    layout: {
          padding: 5
    }
  };
  
    public barChartLabels: string[] = [];
    public barChartType: any = 'line';
    public barChartData: any[] = [];
  

  loadAttendanceReport(): void {
    
    this.courseService.getCourseData().subscribe((data) => {
      this.attendance = data.attendance;

      // Set labels for weeks
      this.barChartLabels = this.attendance.map((category: any) => category.week);

      // Extract attendance percentages
      const attendanceData = this.attendance.map((category: any) => category.percentage);

      // Update the chart data
      this.barChartData = [
        {
          label: 'Attendance Percentage',
          data: attendanceData,
          borderColor: '#d5acea', // Line color
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Optional, area fill under the line
          pointBackgroundColor: '#000',
          // fill: true, // Fill under the line
        }
      ];
      
    })
  }
}
