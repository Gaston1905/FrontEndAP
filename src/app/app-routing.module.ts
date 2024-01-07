import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectComponent } from './components/project/project.component';
import { DeveloperJobComponent } from './components/jobs/developer-job/developer-job.component';
import { MaintanceJobComponent } from './components/jobs/maintance-job/maintance-job.component';
import { LowCostJobComponent } from './components/jobs/low-cost-job/low-cost-job.component';

const routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'portfolio', component: ProjectComponent },
  { path: 'design&dev', component: DeveloperJobComponent },
  { path: 'maintance', component: MaintanceJobComponent },
  { path: 'low-cost', component: LowCostJobComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
