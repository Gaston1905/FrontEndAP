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
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
      console.log('tema oscuro');
      // Aplicar el tema oscuro
      document.body.classList.add('dark-theme');
    } else {
      console.log('tema claro');
      // Aplicar el tema claro
      //  document.body.classList.remove('dark-theme');
    }

    this.showSplashScreen = true;
    setTimeout(() => {
      this.showSplashScreen = false;
    }, 2500);
  }
}
