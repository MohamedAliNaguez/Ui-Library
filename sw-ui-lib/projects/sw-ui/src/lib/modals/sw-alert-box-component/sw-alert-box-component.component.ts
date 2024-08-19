import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-sw-alert-box-component',
  templateUrl: './sw-alert-box-component.component.html',
  styleUrls: ['./sw-alert-box-component.component.css']
})
export class SwAlertBoxComponentComponent {
  @Input() message: string = ''; // Input property for the dialog message

  @Input() isVisible: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
