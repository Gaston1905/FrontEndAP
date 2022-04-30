import { Component, OnInit } from '@angular/core';
import { UserlogedService } from 'src/app/services/userloged.service';
import { LogincallService } from 'src/app/services/logincall.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'portfolio';
  showlogin: boolean = false;
  wpopup: boolean = false;
  subscription?: Subscription;

  constructor(
    private userloged: UserlogedService,
    private logincall: LogincallService
  ) {
    this.subscription = this.userloged
      .onToggle()
      .subscribe((value) => (this.showlogin = value));
  }

  ngOnInit(): void {}

  toggleLogin() {
    this.userloged.toggleLogin();
  }
  wPopup() {
    this.logincall.wPopup();
  }
}
