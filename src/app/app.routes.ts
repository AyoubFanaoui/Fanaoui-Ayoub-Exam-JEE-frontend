import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './components/client/client.component';
import {RemboursementComponent} from './components/remboursement/remboursement.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'client', component: ClientComponent },
  { path: 'rembourcement', component: RemboursementComponent }


];
