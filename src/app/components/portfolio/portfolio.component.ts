
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  AboutMeService: any;

  @Input() projects: Project[] = [];





  constructor( private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProject();
  }

  public getProject(): void {
    this.projectService.getProject().subscribe({
      next: (response: Project[]) => {
        this.projects = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }



}
