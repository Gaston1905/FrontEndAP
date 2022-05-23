import { Component, OnInit, ViewChild } from '@angular/core';
import { UserlogedService } from 'src/app/services/userloged.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;
  title: string = 'portfolio';
  
  showlogin: boolean = false;
  subscription?: Subscription;
  userLogged = this.authService.getUserLogged();
  faPenToSquare = faPenToSquare;
  faXmarkCircle = faXmarkCircle;


  constructor(
    private usuarioservice: UsuarioService,
    
    private userloged: UserlogedService,
    private authService: AuthService
  ) {
    this.subscription = this.userloged
      .onToggle()
      .subscribe((value) => (this.showlogin = value));
  }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void{
    this.usuarioservice.getUser().subscribe({
      next: (response: Usuario) =>{
        this.usuario=response;
      },
      error:(HttpErrorResponse)=>{
        alert(Error);
      }
    })
  }

  toggleLogin() {
    this.userloged.toggleLogin();
  }
}
