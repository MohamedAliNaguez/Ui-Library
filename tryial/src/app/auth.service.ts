import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `http://localhost:8000/api`;  // Adjust API URL as needed
  private authTokenKey = 'auth_token';
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  // Register a new user
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Log in a user
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // Store token and user details
  storeToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
    this.currentUserSubject.next(token);
  }

  // Get token
  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Log out the user
  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    this.currentUserSubject.next(null);
  }

  // Set headers for authenticated requests
  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
  }
}
