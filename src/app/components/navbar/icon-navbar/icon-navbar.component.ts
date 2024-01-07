import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-navbar',
  template: `<a class="navbar-brand d-flex align-items-center gap-2" href="#">
    <img
      src="../../../../assets/img-header.webp"
      alt="img-header-logo"
      width="20"
      height="40"
      class="d-inline-block align-text-top"
      id="img-front"
    />
  </a>`,
  styleUrl: './icon-navbar.component.scss',
})
export class IconNavbarComponent {}
