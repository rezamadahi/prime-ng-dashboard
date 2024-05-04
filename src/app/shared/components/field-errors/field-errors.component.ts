import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-field-errors',
  standalone: true,
  templateUrl: './field-errors.component.html',
  styleUrl: './field-errors.component.scss',
  imports: [
    NgIf,
  ],
})
export class FieldErrorsComponent {

  @Input("form") form!: FormGroup;
  @Input("field") fieldName: string = '';
  @Input("nicename") niceName: string = '';

  constructor() {}

  fieldErrors(field: string) {
    let controlState = this.form.controls[field];
    return (controlState.dirty && controlState.errors) ? controlState.errors : null;
  }

}
