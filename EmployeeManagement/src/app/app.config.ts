import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from '../service/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(),  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true, // Ensures multiple interceptors can be chained
  }]
};


export const environment = {
  production: false,
  baseUrl: 'http://localhost:5014', // Your development base URL'
  key:'12345678901234567890123456789012',
  iv:'1234567890123456'
};
