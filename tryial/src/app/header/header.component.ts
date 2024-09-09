import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.authService.getUserDetails().subscribe(user => {
        this.userName = user?.name || 'Guest'; // Use 'Guest' if user name is not available
      });
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to the login page
  }
}
