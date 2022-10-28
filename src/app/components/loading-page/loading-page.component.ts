import { LoadingPageService } from './../../services/loading-page.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
;


@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  showLoading = false;

  constructor(
    private loadingSVC: LoadingPageService,
    private cdRef: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.loadingSVC.getLoadingObserver().subscribe((status) => {
      this.showLoading = status === 'start';
      this.cdRef.detectChanges();
    });
  }

}
