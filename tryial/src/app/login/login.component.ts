// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  success: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token); // Store JWT token
        this.success = 'Login successful!';
        this.error = '';
        this.router.navigate(['/protected']); // Navigate to a protected route
      },
      error: (err) => {
        this.error = err.error.error || 'Login failed';
        this.success = '';
      }
    });
  }
}
