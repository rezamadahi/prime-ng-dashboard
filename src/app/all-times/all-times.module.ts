import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTimesRoutingModule } from './all-times-routing.module';
import { AllTimesComponent } from './all-times/all-times.component';


@NgModule({
  declarations: [
    AllTimesComponent
  ],
  imports: [
    CommonModule,
    AllTimesRoutingModule
  ]
})
export class AllTimesModule { }
