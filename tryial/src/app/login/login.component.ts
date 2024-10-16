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
  loading: boolean = false; // New loading property

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.loading = true; // Start loading spinner
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.storeToken(response.token); // Store JWT token using AuthService
        this.success = 'Login successful!';
        this.error = '';
        this.loading = false; // Stop loading spinner
        this.router.navigate(['/components']); // Navigate to a protected route
      },
      error: (err) => {
        console.log(err);
        this.error = err.error.error || 'Login failed';
        this.success = '';
        this.loading = false; // Stop loading spinner
      }
    });
  }
}
