import { Component } from '@angular/core';

@Component({
  selector: 'app-option-navbar',
  template: `<div class="d-flex gap-4">
    <span>
      <a href="/home"> Inicio </a>
    </span>
    <span>
      <a href="/portfolio"> Portfolio </a>
    </span>
    <span class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Servicios
      </a>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="/design&dev"
            >Diseño y Desarrollo Web</a
          >
        </li>
        <li>
          <a class="dropdown-item" href="/maintance">Mantenimiento Web</a>
        </li>
        <li>
          <a class="dropdown-item" href="/low-cost">Sitio Web Low Cost</a>
        </li>
      </ul>
    </span>
    <span>
      <a href="" style="position:relative; cursor: default">
        Blog y Tutoriales
        <span
          class="text-danger"
          style="position:absolute;font-size: 10px; right: 0; bottom: -10px"
          >Próximamente</span
        >
      </a>
    </span>
    <span>
      <button
        type="button"
        class="btn rounded-pill d-flex justify-content-center align-items-center gap-2"
      >
        <i class="bi bi-calendar-check"></i>
        <p class="mb-0">Contáctame</p>
      </button>
    </span>
  </div>`,
  styleUrl: './option-navbar.component.scss',
})
export class OptionNavbarComponent {}
