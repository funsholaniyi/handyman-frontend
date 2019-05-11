import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rootEndPoint } from '../constants/endpoints.constant';
import { HandymanModel } from '../models/account.model';
import { APIResponseModel } from '../models/api-response.model';
import { CreateServiceRequestsModel, ServiceRequestsModel } from '../models/service-requests.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestsService {

  constructor(private http: HttpClient) {
  }

  createServiceRequest(data: CreateServiceRequestsModel): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + 'order';
    return this.http.post<APIResponseModel>(endpoint, data);
  }

  getServiceRequests(userId: string): Observable<ServiceRequestsModel[]> {
    const endpoint = rootEndPoint + 'orders' + '/'+userId;
    return this.http.get<ServiceRequestsModel[]>(endpoint);
  }

  deleteRequest(requestId: string): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + requestId;
    return this.http.delete<APIResponseModel>(endpoint);
  }

  getHandymanDetails(userId: string): Observable<any> {
    userId = !userId ? '5cd54b2569bcdd00173eb446': userId;
    const endpoint = rootEndPoint + 'handy/' + userId;
    return this.http.get<HandymanModel>(endpoint);
  }
}
