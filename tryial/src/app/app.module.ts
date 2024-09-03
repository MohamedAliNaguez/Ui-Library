import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SwUiModule } from 'dalynaguez-sw-ui';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    SwUiModule,
    RouterModule.forRoot(routes), // Add RouterModule here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
