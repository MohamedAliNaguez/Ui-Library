import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sw-input-field-component',
  templateUrl: './sw-input-field-component.component.html',
  styleUrls: ['./sw-input-field-component.component.css']
})
export class SwInputFieldComponentComponent {
  @Input() placeholder: string = '';

}
