import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { AboutMe } from 'src/app/model/about';
import { AboutMeService } from 'src/app/services/about-me.service';
import { Subscription } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  public aboutme: AboutMe[] = [];
  public aboutme2 = this.aboutMeService.getAboutMe();
  public editAboutMe: AboutMe | undefined;
  faPenToSquare = faPenToSquare;

  subscription?: Subscription;

  constructor(
    private aboutMeService: AboutMeService,
    public autenticacionService: AutenticacionService
  ) {}

  isloged = () => this.autenticacionService.loggedIn();

  ngOnInit(): void {
    this.getAboutMe();
  }

  public getAboutMe(): void {
    this.aboutMeService.getAboutMe().subscribe({
      next: (response: AboutMe[]) => {
        this.aboutme = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }

  public onOpenModal(mode: string, aboutme?: AboutMe): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    this.editAboutMe = aboutme;
    button.setAttribute('data-target', '#editAboutMeModal');

    container?.appendChild(button);
    button.click();
  }

  public onUpdateAboutMe(aboutme: AboutMe): void {
    this.editAboutMe = aboutme;
    document.getElementById('add-aboutme-form')?.click();
    this.aboutMeService.updateAboutMe(aboutme).subscribe({
      next: (response: AboutMe) => {
        console.log(response);
        this.getAboutMe();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

}
