import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>About Us</h1><p>Learn more about JSL Technology.</p>`,
  styles: [],
})
export class AboutComponent {}
