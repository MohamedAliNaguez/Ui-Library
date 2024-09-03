import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'components', component: ComponentsComponent },

  // Redirect to 'register' or any default route you want when path is empty
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  // Add a wildcard route to handle any unknown paths
  { path: '**', redirectTo: '/register' }
];
