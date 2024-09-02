import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private apiUrl = 'https://swlib-backend.onrender.com/api/components'; // Your components API
  private previewUrl = 'https://swlib-backend.onrender.com/api/preview'; // Updated HTML content service URL

  constructor(private http: HttpClient) { }

  getComponents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getComponentHtml(componentId: string): Observable<string> {
    return this.http.get(`${this.previewUrl}/${componentId}`, { responseType: 'text' });
  }
}
