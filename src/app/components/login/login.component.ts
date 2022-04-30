import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LogincallService } from 'src/app/services/logincall.service';
import { Subscription } from 'rxjs';
import { UserlogedService } from 'src/app/services/userloged.service';

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
  @Input() display: string = '';

  wpopup: boolean = false;
  subscription?: Subscription;

  constructor(
    private authService: AuthService,
    private logincall: LogincallService,
    private userloged: UserlogedService
  ) {
    this.subscription = this.logincall
      .onWindow()
      .subscribe((value) => (this.wpopup = value));
  }
  Ingresar() {
    console.log(this.usuario);
  }
  obtenerUsuarioLogeado() {
    this.authService.getUserLogged().subscribe((res) => {
      console.log(res?.email);
    });
  }
  logout() {
    this.authService.logout();
  }
  wPopup() {
    console.log('hola');
    this.logincall.wPopup();
  }
}
