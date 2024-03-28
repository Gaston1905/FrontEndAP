import { Component } from '@angular/core';

@Component({
  selector: 'app-rrss-navbar',
  template: ` <ul
    class=" navbar-nav d-flex flex-row bd-highlight align-items-center"
    id="btn-social-media"
  >
    <li class=" nav-item active ms-3 me-1">
      <a
        target="_blank"
        class="nav-link"
        id="link-animado"
        href="https://www.linkedin.com/in/gaston-gaitan-1a3799205/"
        ><img
          src="../../../assets/linkedin.webp"
          alt="icon-linkedin"
          width="28"
      /></a>
    </li>
    <li class="nav-item active ms-1 me-1">
      <a
        target="_blank"
        class="nav-link active"
        id="link-animado"
        href="https://www.instagram.com/gaitan_dev/"
        ><img
          src="../../../assets/instagram.webp"
          alt="icon-instagram"
          width="28"
      /></a>
    </li>
    <li class="nav-item active ms-1 me-1">
      <a
        target="_blank"
        class="nav-link active"
        id="link-animado"
        href="https://github.com/Gaston1905"
        ><img src="../../../assets/github.webp" alt="icon-github" width="28"
      /></a>
    </li>

    <button
      type="button"
      class="btn btn-info btn-sm ms-4"
      onclick="document.documentElement.classList.toggle('dark-mode')"
      id="btn-style"
    >
      <img
        src="../../../assets/sun.webp"
        alt="icon-sun"
        width="25"
        id="img-sun"
      /><img
        src="../../../assets/moon.webp"
        alt="icon-moon"
        width="25"
        id="img-moon"
      />
    </button>
  </ul>`,
  styleUrl: '../rrss-navbar/rrss-navbar.component.scss',
})
export class RrssNavbarComponent {}
