import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BusinessCustomersRoutingModule } from './business-customers-routing.module';
import { CustomerReportsComponent } from './customer-reports/customer-reports.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, CustomerReportsComponent],
  imports: [
    CommonModule,
    SharedModule,
    BusinessCustomersRoutingModule
  ]
})
export class BusinessCustomersModule {
}
