import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from '../models/account.model';
import { CurrentUserService } from '../services/current-user.service';


@Component({
  selector: 'app-primary-sidebar',
  templateUrl: './primary-sidebar.component.html',
  styleUrls: ['./primary-sidebar.component.scss']
})
export class PrimarySidebarComponent implements OnInit {

  user = new UserProfileModel();
  messageText: string;
  showSuccessMessage: boolean;
  showErrorMessage: boolean;

  constructor(private currentUser: CurrentUserService) {
  }

  ngOnInit() {
    this.currentUser.getCurrentUser().subscribe(
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
