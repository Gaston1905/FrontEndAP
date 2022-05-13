import { Component, OnInit, ViewChild } from '@angular/core';
import { UserlogedService } from 'src/app/services/userloged.service';

import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'portfolio';
  showlogin: boolean = false;
  subscription?: Subscription;
  userLogged = this.authService.getUserLogged();


  constructor(
    private userloged: UserlogedService,
    private authService: AuthService
  ) {
    this.subscription = this.userloged
      .onToggle()
      .subscribe((value) => (this.showlogin = value));
  }

  ngOnInit(): void {}

  toggleLogin() {
    this.userloged.toggleLogin();
  }
}
