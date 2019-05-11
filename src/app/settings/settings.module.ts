import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ViewSettingsComponent } from './view-settings/view-settings.component';

@NgModule({
  declarations: [ViewSettingsComponent, LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule {
}
