import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTimesComponent} from "./all-times/all-times.component";

const routes: Routes = [
  {
    path: '',
    component: AllTimesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTimesRoutingModule { }
