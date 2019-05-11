import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rootEndPoint } from '../constants/endpoints.constant';
import { UserLoginModel, UserRegisterModel } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http: HttpClient) {
  }

  login(data: UserLoginModel): Observable<any> {
    const endpoint = rootEndPoint + 'handyman/login';
    return this.http.post<any>(endpoint, data);
  }

  logout(): Observable<any> {
    const endpoint = rootEndPoint + 'logout';
    return this.http.post<any>(endpoint, {});
  }


  register(data: UserRegisterModel): Observable<any> {
    const endpoint = rootEndPoint + '/handyman/register';
    return this.http.post<any>(endpoint, data);
  }

}
