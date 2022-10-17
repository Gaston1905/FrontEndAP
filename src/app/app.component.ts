

import { Component } from '@angular/core';
import { AboutMeService } from './services/about-me.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: any;


constructor(private aboutMeSVC: AboutMeService) {

}

  getAbout() {
    this.aboutMeSVC.getAboutMe();
  }

}

