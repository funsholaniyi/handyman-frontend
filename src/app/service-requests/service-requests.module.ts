import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateServiceRequestComponent } from './create-service-request/create-service-request.component';
import { LayoutComponent } from './layout/layout.component';
import { ServiceRequestListComponent } from './service-request-list/service-request-list.component';
import { ServiceRequestsRoutingModule } from './service-requests-routing.module';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [CreateServiceRequestComponent, ServiceRequestListComponent, LayoutComponent],
  imports: [
    SharedModule,
    Angular4PaystackModule,
    ServiceRequestsRoutingModule
  ]
})
export class ServiceRequestsModule {
}
