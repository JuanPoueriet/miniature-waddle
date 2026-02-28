import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-management',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Content Management</h1><p>Manage your site content here.</p>`,
  styles: [],
})
export class ContentManagementComponent {}
