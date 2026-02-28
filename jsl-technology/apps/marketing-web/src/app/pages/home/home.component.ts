import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Home Page - JSL Technology</h1><p>Welcome to our marketing site.</p>`,
  styles: [],
})
export class HomeComponent {}
