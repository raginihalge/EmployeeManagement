import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../app/app.config';

@Injectable({
  providedIn: 'root'
})
export class EmpEmpRegistrationService {

  private BaseURL=environment.baseUrl;

  constructor(private http:HttpClient) { }
  
   // Method to get the token from localStorage
   private getToken(): string | null {
    return localStorage.getItem('authToken');
  }
SaveEmployee(endpoint:string ,payload:any):Observable<any>{
  debugger;
  const token = this.getToken();

  // Set headers with Authorization token
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });

  return this.http.post(`${this.BaseURL}/${endpoint}`,payload,{headers});
}
}
