import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Admin Dashboard</h1><p>Welcome to the admin console.</p>`,
  styles: [],
})
export class DashboardComponent {}
