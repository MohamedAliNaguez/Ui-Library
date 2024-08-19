import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sw-text-area-component',
  templateUrl: './sw-text-area-component.component.html',
  styleUrls: ['./sw-text-area-component.component.css']
})
export class SwTextAreaComponentComponent {
  @Input() placeholder: string = '';

}
