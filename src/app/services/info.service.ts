import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from '../model/info';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getInfo(): Observable<Info> {
    return this.http.get<Info>(`${this.apiServerUrl}/api/info/1`);
  }
  public updateInfo(info: Info): Observable<Info> {
    return this.http.put<Info>(`${this.apiServerUrl}/api/info`, info);
  }
}
