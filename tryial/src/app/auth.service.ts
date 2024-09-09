import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://swlib-backend.onrender.com/api'; // Your backend API URL
  private tokenKey = 'authToken'; // Key for storing the token in localStorage

  constructor(private http: HttpClient) {}

  register(name: string, lastname: string, role: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { name, lastname, role, email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password });
  }

  // Store the JWT token
  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve the JWT token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Check if the user is authenticated by checking if the token exists
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Logout the user by removing the token
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
  getUserDetails(): Observable<any> {
    const token = this.getToken();
    if (!token) {
      return of(null);
    }
    return this.http.get<any>(`${this.apiUrl}/user-details`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
