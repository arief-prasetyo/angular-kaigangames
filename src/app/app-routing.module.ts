import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import component
import { AboutComponent } from './frontend/pages/about/about.component';
import { CareersComponent } from './frontend/pages/careers/careers.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';
import { GamesComponent } from './frontend/pages/games/games.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { PressComponent } from './frontend/pages/press/press.component';
import { ForgetPasswordComponent } from './frontend/auth/forget-password/forget-password.component';
import { LoginComponent } from './frontend/auth/login/login.component';
import { RegisterComponent } from './frontend/auth/register/register.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent, 
  },
  {
    path: 'game/#games',
    component: HomeComponent
  },
  {
    path: 'press',
    component: PressComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'sign-in',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: RegisterComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  //dashboard
  {
    path: 'admin/dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
