import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {PanelModule} from "primeng/panel";
import {InputMaskModule} from "primeng/inputmask";
import {EditorModule} from "primeng/editor";
import {CalendarModule} from "primeng/calendar";
import {RadioButtonModule} from "primeng/radiobutton";
import {FieldsetModule} from "primeng/fieldset";
import {ListboxModule} from "primeng/listbox";
import {RatingModule} from "primeng/rating";
import {FieldErrorsComponent} from "../shared/components/field-errors/field-errors.component";


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FieldErrorsComponent,


    PanelModule,
    InputMaskModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    ListboxModule,
    RatingModule,
  ]
})
export class ProjectsModule { }
