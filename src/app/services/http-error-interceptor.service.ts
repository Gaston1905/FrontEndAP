import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AboutMeService } from './about-me.service';
import { LoadingPageService } from './loading-page.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{

  constructor(
    private loadingSVC: LoadingPageService,
    private aboutSVC: AboutMeService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loadingSVC.requestStarted();
    return this.handler(next, request);
  }

  handler(next: any, request: any) {
    return next.handle(request)
    .pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.loadingSVC.requestEnded();
          }
        },
        (error: HttpErrorResponse) => {
          this.loadingSVC.resetLoading();
          throw error;
        }
      )
    )
  }
}
