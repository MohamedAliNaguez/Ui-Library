import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-sw-basic-modal-component',
  templateUrl: './sw-basic-modal-component.component.html',
  styleUrls: ['./sw-basic-modal-component.component.css']
})
export class SwBasicModalComponentComponent {
  @Input() isVisible: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
