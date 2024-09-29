import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'programs', component: ProgramsComponent },
    { path: '', redirectTo: '/programs', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
