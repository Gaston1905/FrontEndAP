import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get('');
  }
}
