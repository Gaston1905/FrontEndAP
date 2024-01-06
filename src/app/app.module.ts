import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpErrorInterceptor } from './services/http-error-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { ExperienceComponent } from './components/experience/experience.component';

import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';

import { InterceptorService } from './services/interceptor.service';
import { EducationComponent } from './components/education/education.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { AutenticacionService } from './services/autenticacion.service';
import { ProjectService } from './services/project.service';
import { ExperienceService } from './services/experience.service';
import { SkillsService } from './services/skills.service';
import { InfoService } from './services/info.service';
import { EducationService } from './services/education.service';
import { AboutMeService } from './services/about-me.service';
import { LoadingPageService } from './services/loading-page.service';
import { SplashComponent } from './shared/splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    FooterComponent,
    PortfolioComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    AboutMeService,
    EducationService,
    InfoService,
    ExperienceService,
    SkillsService,
    ProjectService,
    AutenticacionService,
    LoadingPageService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
