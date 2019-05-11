import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './errors/error-404/error-404.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [AuthGuard]},
  {
    path: 'dashboard', component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: 'customers',
    loadChildren: './business-customers/business-customers.module#BusinessCustomersModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule',
    // canActivate: [AuthGuard]
  },
  {path: 'not-found', component: Error404Component},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
