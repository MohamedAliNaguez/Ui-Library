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



@NgModule({
  declarations: [
  SwIconsDropdownListComponent,
  SwStyledDropdownListComponent,
  SwCentredNavbarComponent,
  SwRightAlignedNavbarComponent,
  SwSimpleNavbarComponent,
  SwUiComponent,
  SwPrimaryButtonComponent,
  SwSecondaryButtonComponent,
  SwSuccessButtonComponent,
  SwBasicDropdownListComponent
],
  imports: [
  ],
  exports: [
  SwUiComponent,
  SwPrimaryButtonComponent,
  SwSecondaryButtonComponent,
  SwSuccessButtonComponent,
  SwBasicDropdownListComponent,
  SwIconsDropdownListComponent,
  SwStyledDropdownListComponent,
  SwCentredNavbarComponent,
  SwRightAlignedNavbarComponent,
  SwSimpleNavbarComponent
]
})
export class SwUiModule { }
