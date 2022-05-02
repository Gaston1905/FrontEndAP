import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  Ingresar() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.authService.login(email, password).then((res) => {
      console.log('Ingreso', res);
    });
  }
  obtenerUsuarioLogeado() {
    this.authService.getUserLogged().subscribe((res) => {
      console.log(res?.email);
    });
  }

  logout() {
    this.authService.logout();
  }
}
