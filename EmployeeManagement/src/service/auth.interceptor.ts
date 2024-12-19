import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Retrieve the token from localStorage (or a service)
    const authToken = localStorage.getItem('authToken');
debugger;
    // Clone the request and add the Authorization header if the token exists
    if (authToken) {
      debugger;
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`, // Use Bearer schema for JWT
        },
      });
      return next.handle(authReq); // Pass the modified request
    }

    return next.handle(req); // Pass the original request if no token
  }
}
