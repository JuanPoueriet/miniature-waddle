import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'content', loadComponent: () => import('./pages/content-management/content-management.component').then(m => m.ContentManagementComponent) },
  { path: 'users', loadComponent: () => import('./pages/user-management/user-management.component').then(m => m.UserManagementComponent) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
