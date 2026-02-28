import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>User Management</h1><p>Manage administrative users here.</p>`,
  styles: [],
})
export class UserManagementComponent {}
