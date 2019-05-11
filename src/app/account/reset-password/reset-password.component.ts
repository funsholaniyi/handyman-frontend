import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  successText: string;
  errorText: string;
  showSuccessMessage: boolean;
  showErrorMessage: boolean;
  btnSpinner: boolean;
  emailVal: string;

  constructor(private route: Router, private service: AccountService, private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.emailVal = this.activatedRoute.snapshot.paramMap.get('email');

    this.resetPasswordForm = this.fb.group({
      email: [this.emailVal, [Validators.required,
        Validators.pattern(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/), Validators.email]]
    });
  }

  get email() {
    return this.resetPasswordForm.get('email');
  }

  ngOnInit() {
  }

  reset() {
    // this.service.reset(this.resetPasswordForm.value).subscribe(data => {
    //   this.message = data.message;
    //   if (data.status === 'error') this.resetPasswordForm.setErrors({APIError: true});
    //   // this.resetPasswordForm.reset('')
    // });
  }

}
