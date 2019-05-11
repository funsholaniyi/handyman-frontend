import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { UserProfileModel } from '../../shared/models/account.model';
import { AccountService } from '../../shared/services/account.service';
import { CurrentUserService } from '../../shared/services/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  messageText: string;
  showSuccessMessage: boolean;
  showErrorMessage: boolean;
  btnSpinner: boolean;
  navigationExtras: NavigationExtras;

  @ViewChild('messageBox') messageBox: ElementRef;

  constructor(private currentUserService: CurrentUserService,
              private titleService: Title, private service: AccountService, private router: Router,
              private fb: FormBuilder, private activatedRoute: ActivatedRoute, private accountService: AccountService,
              private currentUser: CurrentUserService) {
    const handymanId = this.activatedRoute.snapshot.queryParamMap.get('handyman');
    this.navigationExtras = {
      queryParams: {'handymanId': handymanId}
    };
    this.loginForm = fb.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
      new_user: ['']
    });

  }

  get phone() {
    return this.loginForm.get('phone');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get new_user() {
    return this.loginForm.get('new_user');
  }

  ngOnInit() {
    this.titleService.setTitle('HandyMan | Auth');
  }

  login() {
    // console.log(this.loginForm.value);
    this.btnSpinner = true;
    this.showErrorMessage = false;
    this.showSuccessMessage = false;

    if (this.new_user.value) {
      this.accountService.register(this.loginForm.value).subscribe(
        data => {
          this.messageText = data.message;
          this.showSuccessMessage = true;
          const _token = data.Authorization;
          const _data: UserProfileModel = data.body;
          if (_data && _token) {
            this.currentUser.addToken(_token);
            this.currentUser.addUserProfile(_data);
            // this.currentUser.addphone(_data.phone);
            this.btnSpinner = false;
            this.router.navigate(['/'], this.navigationExtras);
          }
        },
        error => {
          this.messageText = error.error.message || error.message;
          this.loginForm.setErrors({APIError: true});
          this.showErrorMessage = true;
          this.btnSpinner = false;
          this.messageBox.nativeElement.focus();

        },
        () => {
        }
      );
    } else {

      this.accountService.login(this.loginForm.value).subscribe(
        data => {
          this.messageText = data.message;
          this.showSuccessMessage = true;
          const _token = data.Authorization;
          const _data: UserProfileModel = data.body;
          if (_data && _token) {
            this.currentUser.addToken(_token);
            this.currentUser.addUserProfile(_data);
            // this.currentUser.addphone(_data.phone);
            this.btnSpinner = false;
            this.router.navigate(['/'], this.navigationExtras);
          }
        },
        error => {
          this.messageText = error.error.message || error.message;
          this.loginForm.setErrors({APIError: true});
          this.showErrorMessage = true;
          this.btnSpinner = false;
          this.messageBox.nativeElement.focus();

        },
        () => {
        }
      );
    }

  }

}
