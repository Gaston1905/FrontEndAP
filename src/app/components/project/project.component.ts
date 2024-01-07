import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { ProjectService } from 'src/app/services/project.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { projects } from 'src/app/mock/projects.mock';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  public projects = projects;
  faPenToSquare = faPenToSquare;
  faXmarkCircle = faXmarkCircle;

  constructor(
    private projectService: ProjectService,
    public autenticacionService: AutenticacionService
  ) {}

  ngOnInit(): void {}
}
