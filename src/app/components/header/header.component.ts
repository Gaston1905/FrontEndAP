import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { InfoService } from 'src/app/services/info.service';
import { Info } from 'src/app/model/info';
import { info } from 'src/app/mock/info.mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public info = info;
  public editInfo: Info | undefined;

  subscription?: Subscription;

  faPenToSquare = faPenToSquare;
  faXmarkCircle = faXmarkCircle;

  constructor(
    private infoService: InfoService,
    private autenticacionService: AutenticacionService
  ) {}

  isloged = () => this.autenticacionService.loggedIn();

  ngOnInit(): void {
    this.getInfo();
  }

  public getInfo(): void {
    this.infoService.getInfo().subscribe({
      next: (response: Info) => {
        this.info = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }

  public onOpenModal(mode: string, info?: Info): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    button.setAttribute('data-target', '#editInfoModal');

    container?.appendChild(button);
    button.click();
  }
  public onUpdateInfo(info: Info): void {
    this.editInfo = info;
    this.infoService.updateInfo(info).subscribe({
      next: (response: Info) => {
        console.log(response);
        this.getInfo();
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }


}
