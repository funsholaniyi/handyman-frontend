import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../shared/services/account.service';
import { CurrentUserService } from '../../shared/services/current-user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private accountService: AccountService,
    private currentUSerService: CurrentUserService
  ) {
  }

  ngOnInit() {
    this.accountService.logout().subscribe(
      data => {

      },
      error => {
        this.currentUSerService.logout();
      },
      () => {
        // console.log('log out');
        this.currentUSerService.logout();
        this.router.navigate(['/account/login']);
      }
    );
  }

}
