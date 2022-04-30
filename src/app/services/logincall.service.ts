import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogincallService {
  private windowlogin: boolean = false;
  private subjet = new Subject<any>();

  constructor() {}

  wPopup(): void {
    this.windowlogin = !this.windowlogin;
    this.subjet.next(this.windowlogin);
  }
  onWindow(): Observable<any> {
    return this.subjet.asObservable();
  }
}
