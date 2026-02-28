import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Portfolio</h1><p>Check out our latest work.</p>`,
  styles: [],
})
export class PortfolioComponent {}
