import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoPageComponent } from './Dashboard/no-page/no-page.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
{ path: 'Register', component: RegisterComponent },
{ path: '',   component: DashboardComponent }, // redirect to `first-component`
{ path: '**', component: NoPageComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
