import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowcaseComponent } from './showcase/showcase.component'
import { SwUiModule } from 'dalynaguez-sw-ui';
import { ComponentListComponent } from './component-list/component-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    ComponentListComponent ,
    
  ],
  imports: [
    BrowserModule    , SwUiModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
