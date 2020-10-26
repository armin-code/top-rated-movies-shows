import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() value: string;
  @Output() filter = new EventEmitter();

  constructor() {}

  search(value: string): void {
    this.filter.emit(value);
  }
}
