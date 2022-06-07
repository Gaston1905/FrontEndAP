import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/api/project`);
  }
  public addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiServerUrl}/api/project`, project);
  }
  public updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiServerUrl}/api/project`, project);
  }
  public deleteProject(projectId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/project/${projectId}`
    );
  }
}
