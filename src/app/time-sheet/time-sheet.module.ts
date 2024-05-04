import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSheetRoutingModule } from './time-sheet-routing.module';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

import { TabViewModule } from 'primeng/tabview';
import {DataViewModule} from "primeng/dataview";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {StepsModule} from "primeng/steps";
import {TreeModule} from "primeng/tree";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    TimeSheetComponent
  ],
  imports: [
    CommonModule,
    TimeSheetRoutingModule,

    TabViewModule,
    DataViewModule,
    PanelModule,
    ButtonModule,
    DialogModule,
    StepsModule,
    TreeModule,
    ConfirmDialogModule,
    TableModule,
  ]
})
export class TimeSheetModule { }
