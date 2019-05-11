import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { rootEndPoint } from '../constants/endpoints.constant';
import { UserLoginModel, UserRegisterModel } from '../models/account.model';
import { APIResponseModel, sampleLoginResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http: HttpClient) {
  }

  login(data: UserLoginModel): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + 'handyman/login';
    // return this.http.post<any>(endpoint, data);
    return of(sampleLoginResponse);
  }

  logout(): Observable<any> {
    const endpoint = rootEndPoint + 'logout';
    // return this.http.post<any>(endpoint, {});
    return of({});
  }


  register(data: UserRegisterModel): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + '/handyman/register';
    // return this.http.post<any>(endpoint, data);
    return of(sampleLoginResponse);
  }

}
