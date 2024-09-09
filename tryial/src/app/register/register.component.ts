import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Any initialization code if needed
  }


  register() {
    this.authService.register(this.name, this.lastname, this.role, this.email, this.password).subscribe({
      next: () => {
        this.success = 'Registration successful!';
        this.error = '';
      },
      error: (err) => {
        this.error = err.error.error || 'Registration failed';
        this.success = '';
      }
    });
  }
}
