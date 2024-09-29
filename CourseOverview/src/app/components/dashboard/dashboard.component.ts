import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  recentActivities = [
    'User John Doe logged in',
    'New project "Alpha" created',
    'Task "Implement login" completed',
    'New user Jane Smith registered'
  ];

  quickActions = [
    'New Project',
    'Add User',
    'Generate Report',
    'Settings'
  ];
}
