import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth-guard.service';
import { LayoutComponent } from './layout/layout.component';
import { ViewSettingsComponent } from './view-settings/view-settings.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: ViewSettingsComponent, pathMatch: 'full'}
    ], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
