import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SplashComponent implements OnInit {
  public showSplashScreen: boolean = true;
  ngOnInit(): void {
    this.showSplashScreen = true;
    setTimeout(() => {
      this.showSplashScreen = false;
    }, 2500);
  }
}
