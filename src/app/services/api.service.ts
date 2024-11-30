import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.thirdparty.com/v1'; // Replace with the API base URL

  constructor(private http: HttpClient) {}

  // Example GET method
  getExampleData(): Observable<any> {
    const url = `${this.baseUrl}/example-endpoint`;
    return this.http.get(url, this.getHttpOptions());
  }

  // Example POST method
  postExampleData(payload: any): Observable<any> {
    const url = `${this.baseUrl}/example-endpoint`;
    return this.http.post(url, payload, this.getHttpOptions());
  }

  signInWithLinkedIn(payload: any): Observable<any> {
    const url = `${this.baseUrl}/example-endpoint`;
    return this.http.post(url, payload, this.getHttpOptions());
  }


  // Utility method for adding headers
  private getHttpOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer YOUR_API_TOKEN`, // Replace with actual token
    });

    return { headers };
  }
}
