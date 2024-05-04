import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import {PanelModule} from "primeng/panel";
import {ChartModule} from "primeng/chart";
import {StatisticComponent} from "../shared/components/statistic/statistic.component";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StatisticComponent,

    PanelModule,
    ChartModule,
    StatisticComponent,
  ]
})
export class DashboardModule { }
