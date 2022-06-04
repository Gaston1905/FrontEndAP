import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Experience } from '../model/experience';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiServerUrl}/api/experience`);
  }

  public addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(
      `${this.apiServerUrl}/api/experience`,
      experience
    );
  }

  public updateExperience(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(
      `${this.apiServerUrl}/api/experience`,
      experience
    );
  }

  public deleteExperience(experienceId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/experience/${experienceId}`
    );
  }
}
