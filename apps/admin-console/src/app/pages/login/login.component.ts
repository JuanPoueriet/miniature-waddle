import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Admin Login</h1><p>Please enter your credentials.</p>`,
  styles: [],
})
export class LoginComponent {}
