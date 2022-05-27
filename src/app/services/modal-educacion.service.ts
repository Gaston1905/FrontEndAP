import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalEducacionService {
  private wpopup: boolean = false;
  private subjet = new Subject<any>();

  constructor() {}

  wPopup(): void {
    console.log('hola');
    this.wpopup = !this.wpopup;
    this.subjet.next(this.wpopup);
  }
  onWindow(): Observable<any> {
    return this.subjet.asObservable();
  }
}
