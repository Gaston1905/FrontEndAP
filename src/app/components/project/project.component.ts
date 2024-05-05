import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { ProjectService } from 'src/app/services/project.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { projectsMock } from 'src/app/mock/projects.mock';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = [];
  faPenToSquare = faPenToSquare;
  faXmarkCircle = faXmarkCircle;

  visibleProjectsIndex: number = 2; // Mostrar inicialmente los primeros 4 proyectos
  projectsToShow: number = 2; // Mostrar 4 proyectos adicionales cada vez

  constructor(
    private projectService: ProjectService,
    public autenticacionService: AutenticacionService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.projects = this.projectsData();
  }

  projectsData() {
    return projectsMock;
  }

  hideOn() {
    console.log('visibleProjectsIndex antes:', this.visibleProjectsIndex);
    this.visibleProjectsIndex += this.projectsToShow;
    console.log('visibleProjectsIndex después:', this.visibleProjectsIndex);
  }
}
