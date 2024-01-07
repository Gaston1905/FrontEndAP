import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SplashComponent } from '../shared/splash/splash.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { DeveloperJobComponent } from './jobs/developer-job/developer-job.component';
import { MaintanceJobComponent } from './jobs/maintance-job/maintance-job.component';
import { LowCostJobComponent } from './jobs/low-cost-job/low-cost-job.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    FooterComponent,
    PortfolioComponent,
    AboutMeComponent,
    SkillsComponent,
    SplashComponent,
    ProjectComponent,
    DeveloperJobComponent,
    MaintanceJobComponent,
    LowCostJobComponent,
  ],
  imports: [CommonModule, NavbarModule],
})
export class ComponentModule {}
