import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss',
  standalone: true,
  imports: [
    NgIf
  ]
})
export class StatisticComponent {

  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() colour: string = '';

  constructor() {}
}
