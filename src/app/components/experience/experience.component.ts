import { experience } from './../../mock/experience.mock';
import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public experiences = experience;
  public editExperience: Experience | undefined;
  public deleteExperience: Experience | undefined;
  faPenToSquare = faPenToSquare;
  faXmarkCircle = faXmarkCircle;
  subscription?: Subscription;

  constructor(
    private experienceService: ExperienceService,
    private autenticacionService: AutenticacionService
  ) {}

  isloged = () => this.autenticacionService.loggedIn();

  ngOnInit(): void {
    // this.getExperience();
  }

  // public getExperience(): void {
  //   this.experienceService.getExperience().subscribe({
  //     next: (Response: Experience[]) => {
  //       this.experiences = Response;
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     },
  //   });
  // }

  public onOpenModal(mode: String, experience?: Experience): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExperienceModal');
    } else if (mode === 'delete') {
      this.deleteExperience = experience;
      button.setAttribute('data-target', '#deleteExperienceModal');
    } else if (mode === 'edit') {
      this.editExperience = experience;
      button.setAttribute('data-target', '#editExperienceModal');
    }

    container?.appendChild(button);
    button.click();
  }

  // public onAddExperience(addForm: NgForm): void {
  //   document.getElementById('add-experience-form')?.click();
  //   this.experienceService.addExperience(addForm.value).subscribe({
  //     next: (response: Experience) => {
  //       console.log(response);
  //       this.getExperience();
  //       addForm.reset();
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       addForm.reset();
  //     },
  //   });
  // }

  // public onUpdateExperience(experience: Experience) {
  //   this.editExperience = experience;
  //   document.getElementById('add-experience-form')?.click();
  //   this.experienceService.updateExperience(experience).subscribe({
  //     next: (response: Experience) => {
  //       console.log(response);
  //       this.getExperience();
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     },
  //   });
  // }

  // public onDeleteExperience(idExp: number): void {
  //   this.experienceService.deleteExperience(idExp).subscribe({
  //     next: (response: void) => {
  //       console.log(response);
  //       this.getExperience();
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     },
  //   });
  // }

}
