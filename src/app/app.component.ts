import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: any;

  constructor() {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
      // Aplicar el tema oscuro
      document.documentElement.classList.toggle('dark-mode');
    } else {
      // Aplicar el tema claro
      //  document.body.classList.remove('dark-theme');
    }
  }
}
