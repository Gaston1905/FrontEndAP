import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserlogedService {
  private showlogin: boolean = false;
  private subjet = new Subject<any>();
  constructor() {}

  toggleLogin(): void {
    this.showlogin = !this.showlogin;
    this.subjet.next(this.showlogin);
  }

  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }
}
