import { NgModule } from '@angular/core';
import { SwUiComponent } from './sw-ui.component';
import { SwPrimaryButtonComponent } from './buttons/sw-primary-button/sw-primary-button.component';
import { SwSecondaryButtonComponent } from './buttons/sw-secondary-button/sw-secondary-button.component';
import { SwSuccessButtonComponent } from './buttons/sw-success-button/sw-success-button.component';
import { SwSimpleNavbarComponent } from './navbars/sw-simple-navbar/sw-simple-navbar.component';
import { SwCentredNavbarComponent } from './navbars/sw-centred-navbar/sw-centred-navbar.component';
import { SwRightAlignedNavbarComponent } from './navbars/sw-right-aligned-navbar/sw-right-aligned-navbar.component';
import { SwBasicDropdownListComponent } from './drop-lists/sw-basic-dropdown-list/sw-basic-dropdown-list.component';
import { SwStyledDropdownListComponent } from './drop-lists/sw-styled-dropdown-list/sw-styled-dropdown-list.component';
import { SwIconsDropdownListComponent } from './drop-lists/sw-icons-dropdown-list/sw-icons-dropdown-list.component';
import { SwInputFieldComponentComponent } from './forms/sw-input-field-component/sw-input-field-component.component';
import { SwTextAreaComponentComponent } from './forms/sw-text-area-component/sw-text-area-component.component';
import { SwSelectDropdownComponentComponent } from './forms/sw-select-dropdown-component/sw-select-dropdown-component.component';
import { SwBasicModalComponentComponent } from './modals/sw-basic-modal-component/sw-basic-modal-component.component';
import { SwConfirmationDialogComponentComponent } from './modals/sw-confirmation-dialog-component/sw-confirmation-dialog-component.component';
import { SwAlertBoxComponentComponent } from './modals/sw-alert-box-component/sw-alert-box-component.component';
import { SwCloseButtonComponent } from './buttons/sw-close-button/sw-close-button.component';
import { AnOtherButtonComponent } from './buttons/an-other-button/an-other-button.component';
import { SwButtonComponent } from './buttons/sw-button/sw-button.component';




@NgModule({
  declarations: [
  SwAlertBoxComponentComponent,
  SwConfirmationDialogComponentComponent,
  SwCentredNavbarComponent,
  SwPrimaryButtonComponent,
  SwRightAlignedNavbarComponent,
  SwSecondaryButtonComponent,
  SwSuccessButtonComponent,
  SwBasicDropdownListComponent,
  SwIconsDropdownListComponent,
  SwInputFieldComponentComponent,
  SwSelectDropdownComponentComponent,
  SwTextAreaComponentComponent,
  SwSimpleNavbarComponent,
  AnOtherButtonComponent,
  SwBasicModalComponentComponent,
  SwUiComponent,
  SwButtonComponent,
  SwCloseButtonComponent,
  SwStyledDropdownListComponent
],
  imports: [
  ],
  exports: [
  SwSuccessButtonComponent,
  SwBasicDropdownListComponent,
  SwIconsDropdownListComponent,
  SwCentredNavbarComponent,
  SwRightAlignedNavbarComponent,
  SwSimpleNavbarComponent,
  SwPrimaryButtonComponent,
  SwInputFieldComponentComponent,
  SwSelectDropdownComponentComponent,
  SwTextAreaComponentComponent,
  SwAlertBoxComponentComponent,
  SwBasicModalComponentComponent,
  AnOtherButtonComponent,
  SwConfirmationDialogComponentComponent,
  SwSecondaryButtonComponent,
  SwButtonComponent,
  SwCloseButtonComponent,
  SwStyledDropdownListComponent,
  SwUiComponent
]
})
export class SwUiModule { }
