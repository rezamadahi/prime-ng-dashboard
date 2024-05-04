import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimeSheetComponent} from "./time-sheet/time-sheet.component";

const routes: Routes = [
  {
    path: '',
    component: TimeSheetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeSheetRoutingModule { }
