import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../shared/services/account.service';
import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, ResetPasswordComponent, LayoutComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [AccountService]
})
export class AccountModule {
}
