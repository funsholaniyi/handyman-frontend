import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ConfirmActionComponent } from './confirm-action/confirm-action.component';
import { GenerateDefaultPictureComponent } from './generate-default-picture/generate-default-picture.component';
import { AppConfigService } from './helpers/app-config.service';
import { PrimaryNavbarComponent } from './primary-navbar/primary-navbar.component';
import { PrimarySidebarComponent } from './primary-sidebar/primary-sidebar.component';
import { AuthGuard } from './services/auth-guard.service';
import { CurrentUserService } from './services/current-user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [PrimarySidebarComponent, GenerateDefaultPictureComponent, PrimaryNavbarComponent, ConfirmActionComponent],
  providers: [AuthGuard, CurrentUserService, AppConfigService],
  exports: [PrimarySidebarComponent, GenerateDefaultPictureComponent, PrimaryNavbarComponent, AngularMaterialModule,
    ReactiveFormsModule, CommonModule, FormsModule, ConfirmActionComponent]
})
export class SharedModule {
}
