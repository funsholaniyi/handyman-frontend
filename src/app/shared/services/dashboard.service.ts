import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { userDashboardOverviewSample } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {
  }


  public loadDashboardOverview(): Observable<any> {
    return of(userDashboardOverviewSample);
  }
}
