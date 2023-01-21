//angular core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//modules
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//components
import { AppComponent } from './app.component';
import { AboutComponent } from './frontend/pages/about/about.component';
import { CareersComponent } from './frontend/pages/careers/careers.component';
import { GamesComponent } from './frontend/pages/games/games.component';
import { PressComponent } from './frontend/pages/press/press.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';
import { NavbarComponent } from './frontend/comp/navbar/navbar.component';
import { FooterComponent } from './frontend/comp/footer/footer.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AlertComponent } from './frontend/comp/alert/alert.component';
import { LoginComponent } from './frontend/auth/login/login.component';
import { RegisterComponent } from './frontend/auth/register/register.component';
import { ForgetPasswordComponent } from './frontend/auth/forget-password/forget-password.component';
import { httpInterceptorProviders } from './helpers/http-request.interceptor';
import { ProfileComponent } from './backend/profile/profile.component';
import { MetismenuAngularModule } from '@metismenu/angular';
import { HeaderComponent } from './backend/components/header/header.component';
import { NavigationsComponent } from './backend/components/navigations/navigations.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CareersComponent,
    GamesComponent,
    PressComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ProfileComponent,
    HeaderComponent,
    NavigationsComponent,
    SliderCarouselComponent,
    AboutSliderComponent,
    AboutTeamImageComponent,
    CareersBenefitPerksComponent,
    CareersFeaturedJobComponent,
    CareersGroupOpenPositionComponent,
    CareersOpenPositionComponent,
    CareersLifeAtKaiganComponent,
    ApplicantListComponent,
    GameListComponent,
    GameVideoComponent,
    GameFaqComponent,
    ContactUsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MetismenuAngularModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
