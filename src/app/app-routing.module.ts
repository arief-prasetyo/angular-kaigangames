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
import { SliderCarouselComponent } from './backend/slider-carousel/slider-carousel.component';
import { AboutSliderComponent } from './backend/about-slider/about-slider.component';
import { AboutTeamImageComponent } from './backend/about-team-image/about-team-image.component';
import { CareersBenefitPerksComponent } from './backend/careers-benefit-perks/careers-benefit-perks.component';
import { CareersFeaturedJobComponent } from './backend/careers-featured-job/careers-featured-job.component';
import { CareersGroupOpenPositionComponent } from './backend/careers-group-open-position/careers-group-open-position.component';
import { CareersOpenPositionComponent } from './backend/careers-open-position/careers-open-position.component';
import { CareersLifeAtKaiganComponent } from './backend/careers-life-at-kaigan/careers-life-at-kaigan.component';
import { ApplicantListComponent } from './backend/applicant-list/applicant-list.component';
import { GameListComponent } from './backend/game-list/game-list.component';
import { GameVideoComponent } from './backend/game-video/game-video.component';
import { GameFaqComponent } from './backend/game-faq/game-faq.component';
import { ContactUsListComponent } from './backend/contact-us-list/contact-us-list.component';

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
  },
  //header
  {
    path: 'admin/header/slider-carousel',
    component: SliderCarouselComponent,
  },
  //about
  {
    path: 'admin/about/',
    component: AboutComponent
  },
  {
    path: 'admin/about/slider-carousel',
    component: AboutSliderComponent
  },
  {
    path: 'admin/about/team-image',
    component: AboutTeamImageComponent
  },
  //careers
  {
    path: 'admin/careers/perks-and-benefit',
    component: CareersBenefitPerksComponent
  },
  {
    path: 'admin/careers/featured-job',
    component: CareersFeaturedJobComponent
  },
  {
    path: 'admin/careers/group-open-position',
    component: CareersGroupOpenPositionComponent
  },
  {
    path: 'admin/careers/open-position',
    component: CareersOpenPositionComponent
  },
  {
    path: 'admin/careers/life-at-kaigan',
    component: CareersLifeAtKaiganComponent
  },
  //aplicant list
  {
    path: 'admin/job-vacancy/applicant-list',
    component: ApplicantListComponent
  },
  //games
  {
    path: 'admin/games/list',
    component: GameListComponent
  },
  {
    path: 'admin/games/video',
    component: GameVideoComponent
  },
  {
    path: 'admin/games/faq',
    component: GameFaqComponent
  },
  //contact us
  {
    path: 'admin/contact-us',
    component: ContactUsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
