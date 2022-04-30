import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserlogedService } from 'src/app/services/userloged.service';
import { LogincallService } from 'src/app/services/logincall.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

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
    private logincall: LogincallService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
  wPopup() {
    const modal = this.modalService.open(LoginComponent);
    modal.result.catch(this.handleModalLoginClose.bind(this));
  }

  handleModalLoginClose() {}
}
