import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserlogedService } from 'src/app/services/userloged.service';
import { LogincallService } from 'src/app/services/logincall.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color: string = '';
  @Input() text: string = '';
  @Input() class: string = '';
  @Output() btnClick = new EventEmitter();

  showlogin: boolean = false;
  wpopup: boolean = false;
  subscription?: Subscription;

  constructor(
    private userloged: UserlogedService,
    private logincall: LogincallService
  ) {
    this.subscription = this.logincall
      .onWindow()
      .subscribe((value) => (this.wpopup = value));
  }

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
  wPopup() {
    this.logincall.wPopup();
  }
}
