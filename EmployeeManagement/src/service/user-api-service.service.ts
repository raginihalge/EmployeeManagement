import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../app/app.config';

@Injectable({
  providedIn: 'root'
})
export class UserApiServiceService {

  private baseUrl = environment.baseUrl; // Replace with your API's base URL

  constructor(private http: HttpClient) { }

  // Example POST method with payload
  postData(endpoint: string, payload: any): Observable<any> {
    debugger;
    return this.http.post(`${this.baseUrl}/${endpoint}`, payload);
  }
}
