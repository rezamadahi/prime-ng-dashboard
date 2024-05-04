import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {PanelModule} from "primeng/panel";
import {GalleriaModule} from "primeng/galleria";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,

    PanelModule,
    GalleriaModule,
  ]
})
export class ProfileModule { }
