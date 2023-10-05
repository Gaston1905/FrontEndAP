import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingPageService {

  private count = 0;
  private loading$ = new BehaviorSubject<string>('');


  constructor() { }

  getLoadingObserver(): Observable<string> {
    return this.loading$.asObservable();
  }

  requestStarted() {

      if(++this.count === 1) {
        this.loading$.next('start');
      }


  }

  requestEnded() {

    if(this.count === 0 || --this.count === 0) {
      this.loading$.next('stop');
    }
  }

  resetLoading() {
    this.count = 0;
    this.loading$.next('stop');
  }
}
