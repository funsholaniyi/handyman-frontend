import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateServiceRequestComponent } from './create-service-request/create-service-request.component';
import { LayoutComponent } from './layout/layout.component';
import { ServiceRequestListComponent } from './service-request-list/service-request-list.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: CreateServiceRequestComponent, pathMatch: 'full'},
      {path: 'history', component: ServiceRequestListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRequestsRoutingModule {
}
