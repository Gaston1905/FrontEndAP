import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;
  public deleteUsuario: Usuario | undefined;
  title: string = 'portfolio';
  subscription?: Subscription;

  faPenToSquare = faPenToSquare;
  faXmarkCircle = faXmarkCircle;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  public getUsuario(): void {
    this.usuarioService.getUsuario().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode: String, usuario?: Usuario): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUsuarioModal');
    } else if (mode === 'delete') {
      this.deleteUsuario = usuario;
      button.setAttribute('data-target', '#deleteUsuarioModal');
    } else if (mode === 'edit') {
      this.editUsuario = usuario;
      button.setAttribute('data-target', '#editUsuarioModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddUsuario(addForm: NgForm): void {
    document.getElementById('add-usuario-form')?.click();
    this.usuarioService.addUsuario(addForm.value).subscribe({
      next: (response: Usuario) => {
        console.log(response);
        this.getUsuario();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateUsuario(usuario: Usuario) {
    this.editUsuario = usuario;
    document.getElementById('add-usuario-form')?.click();
    this.usuarioService.updateUsuario(usuario).subscribe({
      next: (response: Usuario) => {
        console.log(response);
        this.getUsuario();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteUsuario(usuario: Usuario): void {
    this.usuarioService.deleteUsuario(usuario.id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getUsuario();
      },
    });
  }
}
