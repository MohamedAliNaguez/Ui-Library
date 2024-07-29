import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { swlibModule } from 'daly-swlib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule , swlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
