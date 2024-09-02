// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://swlib-backend.onrender.com/api'; // Your backend API URL

  constructor(private http: HttpClient) {}

  register(name: string, lastname: string, role: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { name, lastname, role, email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password });
  }

  // Optionally, add methods to get and store the JWT token, check authentication status, etc.
}
