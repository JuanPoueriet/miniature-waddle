import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Our Services</h1><ul><li>Web App Development</li><li>Desktop Apps</li><li>APIs & Backend</li></ul>`,
  styles: [],
})
export class ServicesComponent {}
