import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectComponent } from './components/project/project.component';
import { DeveloperJobComponent } from './components/jobs/developer-job/developer-job.component';
import { MaintanceJobComponent } from './components/jobs/maintance-job/maintance-job.component';
import { LowCostJobComponent } from './components/jobs/low-cost-job/low-cost-job.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige la ruta base a 'home'
  { path: 'home', component: PortfolioComponent }, // Componente para la ruta 'home'
  { path: 'portfolio', component: ProjectComponent }, // Componente para la ruta 'portfolio'
  { path: 'design&dev', component: DeveloperJobComponent }, // Componente para la ruta 'design&dev'
  { path: 'maintance', component: MaintanceJobComponent }, // Componente para la ruta 'maintance'
  { path: 'low-cost', component: LowCostJobComponent }, // Componente para la ruta 'low-cost'
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
