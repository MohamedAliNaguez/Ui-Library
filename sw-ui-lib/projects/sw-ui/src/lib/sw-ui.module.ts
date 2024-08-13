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
import { TrybuttComponent } from '../public-api';
import { TrynavComponent } from './navbars/trynav/trynav.component';
import { Trynav22Component } from './navbars/trynav22/trynav22.component';
import { NewnavComponent } from './navbars/newnav/newnav.component';
import { NewbuttonComponent } from './buttons/newbutton/newbutton.component';
import { NouveaubuttonComponent } from './buttons/nouveaubutton/nouveaubutton.component';
import { Newbutton1Component } from './buttons/newbutton1/newbutton1.component';
import { TestbuttonComponent } from './buttons/testbutton/testbutton.component';
import { SwButComponent } from './buttons/sw-but/sw-but.component';
import { ButbutComponent } from './buttons/butbut/butbut.component';
import { Testnav2Component } from './navbars/testnav2/testnav2.component';
import { NouveaubutComponent } from './buttons/nouveaubut/nouveaubut.component';
import { ButsspeecccComponent } from './buttons/butsspeeccc/butsspeeccc.component';


@NgModule({
  declarations: [
  SwSuccessButtonComponent,
  SwBasicDropdownListComponent,
  SwIconsDropdownListComponent,
  SwStyledDropdownListComponent,
  SwCentredNavbarComponent,
  SwRightAlignedNavbarComponent,
  SwSimpleNavbarComponent,
  SwUiComponent,
  SwPrimaryButtonComponent,
  SwSecondaryButtonComponent
],
  imports: [
  ],
  exports: [
  SwRightAlignedNavbarComponent,
  SwSimpleNavbarComponent,
  SwUiComponent,
  SwPrimaryButtonComponent,
  SwSecondaryButtonComponent,
  SwSuccessButtonComponent,
  SwBasicDropdownListComponent,
  SwIconsDropdownListComponent,
  SwStyledDropdownListComponent,
  SwCentredNavbarComponent
]
})
export class SwUiModule { }
