import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutMe } from '../model/about';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAboutMe(): Observable<AboutMe[]> {
    return this.http.get<AboutMe[]>(`${this.apiServerUrl}/api/aboutme`);
  }

  public updateAboutMe(aboutme: AboutMe): Observable<AboutMe> {
    return this.http.put<AboutMe>(`${this.apiServerUrl}/api/aboutme`, aboutme);
  }
}
