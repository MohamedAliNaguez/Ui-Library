import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private apiUrl = 'http://localhost:3000/api/components'; // Your components API
  private previewUrl = 'http://localhost:3000/api/preview'; // Updated HTML content service URL

  constructor(private http: HttpClient) { }

  getComponents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getComponentHtml(componentId: string): Observable<string> {
    return this.http.get(`${this.previewUrl}/${componentId}`, { responseType: 'text' });
  }
}
