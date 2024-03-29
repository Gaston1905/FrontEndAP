import { skill } from './../../mock/skill.mock';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from 'src/app/model/skill';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skills = skill;
  public editSkill: Skill | undefined;
  public deleteSkill: Skill | undefined;
  faPenToSquare = faPenToSquare;
  faXmarkCircle = faXmarkCircle;

  constructor(
    private skillsService: SkillsService,
    public autenticacionService: AutenticacionService
  ) {}

  isloged = () => this.autenticacionService.loggedIn();

  ngOnInit(): void {
    // this.getSkill();
  }

  public getSkill(): void {
    this.skillsService.getSkill().subscribe({
      next: (response: Skill[]) => {
        this.skills = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }

  public onOpenModal(mode: string, skill?: Skill): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSkillModal');
    } else if (mode === 'delete') {
      this.deleteSkill = skill;
      button.setAttribute('data-target', '#deleteSkillModal');
    } else if (mode === 'edit') {
      this.editSkill = skill;
      button.setAttribute('data-target', '#editSkillModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddSkill(addForm: NgForm): void {
    document.getElementById('add-skill-form')?.click();
    this.skillsService.addSkill(addForm.value).subscribe({
      next: (response: Skill) => {
        console.log(response);
        this.getSkill();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateSkill(skill: Skill): void {
    this.editSkill = skill;
    this.skillsService.updateSkill(skill).subscribe({
      next: (response: Skill) => {
        console.log(response);
        this.getSkill();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteSkill(idSkill: number): void {
    this.skillsService.deleteSkill(idSkill).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getSkill();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
