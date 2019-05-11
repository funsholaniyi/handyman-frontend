import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints, rootEndPoint } from '../constants/endpoints.constant';
import { UserLoginModel, UserRegisterModel } from '../models/account.model';
import { APIResponseModel } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http: HttpClient) {
  }

  login(data: UserLoginModel): Observable<APIResponseModel> {
    console.log('got to service');
    const endpoint = rootEndPoint + EndPoints.authEndPoint + 'business/login';
    return this.http.post<APIResponseModel>(endpoint, data);
  }

  logout(): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + EndPoints.authEndPoint + 'logout';
    return this.http.post<APIResponseModel>(endpoint, {});
  }


  register(data: UserRegisterModel): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + EndPoints.userEndPoint + 'business';
    return this.http.post<APIResponseModel>(endpoint, data);
  }

}
