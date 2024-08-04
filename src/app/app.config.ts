import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTokenInterceptor } from './admin/guards/add-token.interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideAnimations(),
    provideToastr({timeOut: 5000, positionClass: 'toast-top-right'}),
    provideHttpClient(
      withInterceptors([
        (req, next) => {
          const token = localStorage.getItem('token');
          if (token) {
            const clonedRequest = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
            return next(clonedRequest);
          }
          return next(req);
        }
      ])
    ),

  ]
};
