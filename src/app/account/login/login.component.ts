import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
  phoneVal: string;

  @ViewChild('messageBox') messageBox: ElementRef;

  constructor(private currentUserService: CurrentUserService,
              private titleService: Title, private service: AccountService, private router: Router,
              private fb: FormBuilder, private activatedRoute: ActivatedRoute, private accountService: AccountService,
              private currentUser: CurrentUserService) {
    this.phoneVal = this.activatedRoute.snapshot.paramMap.get('phone');

    this.loginForm = fb.group({
      phone: [this.phoneVal, [Validators.required,
        Validators.pattern(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)]],
      password: ['', Validators.required]
    });

  }

  get phone() {
    return this.loginForm.get('phone');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.titleService.setTitle('HandyMan | Login');
  }

  login() {
    // console.log(this.loginForm.value);
    this.btnSpinner = true;
    this.showErrorMessage = false;
    this.showSuccessMessage = false;
    this.router.navigate(['dashboard']);

      this.accountService.login(this.loginForm.value).subscribe(
      data => {
        this.messageText = data.message;
        this.showSuccessMessage = true;
        const _token = data.Authorization;
        const _data: UserProfileModel = data.body;

        _data.defaultBusiness = {
          businessName: data.body.businessName,
          publicId: data.body.businessId
        };
        if (_data && _token) {
          this.currentUser.addToken(_token);
          this.currentUser.addUserProfile(_data);
          // this.currentUser.addphone(_data.phone);
          this.btnSpinner = false;
          this.router.navigate(['/']);
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
