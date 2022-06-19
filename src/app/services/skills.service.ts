import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../model/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiServerUrl = 'https://arg-programa.herokuapp.com';

  constructor(private http: HttpClient) {}

  public getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiServerUrl}/api/skill`);
  }
  public addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiServerUrl}/api/skill`, skill);
  }

  public updateSkill(skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiServerUrl}/api/skill`, skill);
  }
  public deleteSkill(skillId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/skill/${skillId}`);
  }
}
