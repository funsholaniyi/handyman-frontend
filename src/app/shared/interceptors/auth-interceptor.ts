import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserService } from '../services/current-user.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  myToken: string;

  constructor(private currentUserService: CurrentUserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.myToken = this.currentUserService.getToken();

    if (req.url.indexOf('login') > 0) { // todo put routes that dont need auth token here
      const loginHeader = new HttpHeaders({
        'Content-Type':
          'application/json'
      });

      const requ = req.clone({headers: loginHeader});
      return next.handle(requ);
    } else {

      const auth = 'Bearer ' + this.myToken;  // get the token from the cookie coming from the cookie service
      const authRequest = req.clone({
        headers: req.headers
          .set('Authorization', auth)
          .set('Cache-Control', 'no-cache') // to solve IE issue with caching get Requests
          .set('Pragma', 'no-cache') // to solve IE issue with caching get Requests
      });
      return next.handle(authRequest);
    }
  }
}
