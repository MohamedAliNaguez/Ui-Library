import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SwUiModule } from 'dalynaguez-sw-ui';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    SwUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
