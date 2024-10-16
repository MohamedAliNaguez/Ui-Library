import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  lastname: string = '';
  role: string = '';
  email: string = '';
  password: string = '';
  error: string = '';
  success: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Any initialization code if needed
  }


  register() {
    this.authService.register(this.name, this.lastname, this.role, this.email, this.password).subscribe({
      next: () => {
        this.success = 'Registration successful!';
        this.error = '';
        this.router.navigate(['/login']); // Navigate to a protected route
        Swal.fire("Registration successful! , Login to your account");

      },
      error: (err) => {
        this.error = err.error.error || 'Registration failed';
        this.success = '';
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.error.error,
        });

      }
    });
  }
}
