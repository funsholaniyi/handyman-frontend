import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints, rootEndPoint } from '../constants/endpoints.constant';
import { APIResponseModel } from '../models/api-response.model';
import { CreateTestRequestsModel, TestRequestsModel } from '../models/test-requests.model';

@Injectable({
  providedIn: 'root'
})
export class TestRequestsService {

  constructor(private http: HttpClient) {
  }

  createTestRequest(data: CreateTestRequestsModel): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + EndPoints.testRequestEndpoint + 'new-user';
    return this.http.post<APIResponseModel>(endpoint, data);
  }

  getTestRequests(businessId: string): Observable<TestRequestsModel[]> {
    const endpoint = rootEndPoint + EndPoints.businessEndpoint + businessId + '/requests';
    return this.http.get<TestRequestsModel[]>(endpoint);
  }

  deleteRequest(requestId: string): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + EndPoints.testRequestEndpoint + requestId;
    return this.http.delete<APIResponseModel>(endpoint);
  }
}
