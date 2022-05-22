import { Component, OnInit, ViewChild } from '@angular/core';
import { UserlogedService } from 'src/app/services/userloged.service';

import { subscribeOn, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'portfolio';
  persona: persona = new persona("", "", "");
  showlogin: boolean = false;
  subscription?: Subscription;
  userLogged = this.authService.getUserLogged();
  faPenToSquare = faPenToSquare;
  faXmarkCircle = faXmarkCircle;


  constructor(
    public personaService: PersonaService,
    private userloged: UserlogedService,
    private authService: AuthService
  ) {
    this.subscription = this.userloged
      .onToggle()
      .subscribe((value) => (this.showlogin = value));
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{ this.persona = data}),
    this.personaService.editPersona().subscribe(data=>{this.persona = data})
  }

  toggleLogin() {
    this.userloged.toggleLogin();
  }
}
