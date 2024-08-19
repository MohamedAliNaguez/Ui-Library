import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-sw-confirmation-dialog-component',
  templateUrl: './sw-confirmation-dialog-component.component.html',
  styleUrls: ['./sw-confirmation-dialog-component.component.css']
})
export class SwConfirmationDialogComponentComponent {
  @Input() message: string = ''; // Input property for the dialog message
  @Input() isVisible: boolean = false; // Input property to control visibility
  @Output() confirmAction: EventEmitter<void> = new EventEmitter<void>(); // Event emitter for confirm action
  @Output() cancelAction: EventEmitter<void> = new EventEmitter<void>(); // Event emitter for cancel action

  confirm() {
    this.confirmAction.emit();
  }

  cancel() {
    this.cancelAction.emit();
  }
}
