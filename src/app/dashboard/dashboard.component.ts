import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserProfileModel } from '../shared/models/account.model';
import { UserDashboardOverview } from '../shared/models/dashboard';
import { CurrentUserService } from '../shared/services/current-user.service';
import { DashboardService } from '../shared/services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardOverView = new UserDashboardOverview();

  user = new UserProfileModel();

  constructor(private titleService: Title, private currentUserService: CurrentUserService,
              private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.titleService.setTitle('HandyMan | Dashboard');
    this.getCurrentUser();
    this.dashboardService.loadDashboardOverview().subscribe(
      data => {
        this.dashboardOverView = data;
      }
    );
  }

  getCurrentUser() {
    this.currentUserService.getCurrentUser().subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log(error);

      },
      () => {
        console.log('got it');
      }
    );
  }

}
