import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EndPoints, rootEndPoint } from '../constants/endpoints.constant';
import { APIResponseModel } from '../models/api-response.model';
import { CustomerReportsModel, CustomerReportsModelSample } from '../models/business-customers';
import { dashBoardOverViewSample } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class BusinessCustomersService {

  constructor(private http: HttpClient) {
  }

  getCustomerReports(businessId: string): Observable<CustomerReportsModel[]> {
    const endpoint = rootEndPoint + EndPoints.businessEndpoint + businessId + '/reports';
    // return this.http.get<CustomerReportsModel[]>(endpoint);
    return of(CustomerReportsModelSample);
  }

  deleteReport(requestId: string): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + EndPoints.testRequestEndpoint + requestId;
    return this.http.delete<APIResponseModel>(endpoint);
  }

  loadReportOverview(): Observable<any> {
    return of(dashBoardOverViewSample);
  }
}
