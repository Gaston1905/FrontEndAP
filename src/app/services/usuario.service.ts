import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiServerUrl = 'https://arg-programa.herokuapp.com';

  constructor(private http: HttpClient) {}

  public getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`);
  }

  public addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiServerUrl}/usuario/add`, usuario);
  }

  public updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `${this.apiServerUrl}/usuario/update`,
      usuario
    );
  }

  public deleteUsuario(Id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/usuario/delete/${Id}`);
  }
}
