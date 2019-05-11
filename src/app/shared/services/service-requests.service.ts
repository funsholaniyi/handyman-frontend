import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rootEndPoint } from '../constants/endpoints.constant';
import { APIResponseModel } from '../models/api-response.model';
import { CreateServiceRequestsModel, ServiceRequestsModel } from '../models/service-requests.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestsService {

  constructor(private http: HttpClient) {
  }

  createServiceRequest(data: CreateServiceRequestsModel): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + 'new-user';
    return this.http.post<APIResponseModel>(endpoint, data);
  }

  getServiceRequests(userId: string): Observable<ServiceRequestsModel[]> {
    const endpoint = rootEndPoint + userId + '/requests';
    return this.http.get<ServiceRequestsModel[]>(endpoint);
  }

  deleteRequest(requestId: string): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + requestId;
    return this.http.delete<APIResponseModel>(endpoint);
  }
}
