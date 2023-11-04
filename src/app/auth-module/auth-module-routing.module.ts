import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

  {
    path: 'login',
    canActivate: [AuthGuard],
     component: LoginComponent 
    
  },
  {
    path: 'register',
    canActivate: [AuthGuard],
     component: RegistrationComponent 
    
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
