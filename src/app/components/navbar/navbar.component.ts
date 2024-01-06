import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { faUserLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  form: UntypedFormGroup;
  name: string | undefined;
  faUserLock = faUserLock;
  faLockOpen = faLockOpen;

  constructor(
    public autenticacionService: AutenticacionService,
    private formBuilder: UntypedFormBuilder,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  isloged = () => this.autenticacionService.loggedIn();

  ngOnInit(): void {}

  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    if (this.form.invalid) {
      alert('Mal logueado');
      return;
    }
    event.preventDefault;
    this.autenticacionService
      .IniciarSesion(this.form.value)
      .subscribe((data) => {
        this.ruta.navigate(['/portfolio']);
      });
  }
  handleClear() {
    this.name = '';
  }
}
