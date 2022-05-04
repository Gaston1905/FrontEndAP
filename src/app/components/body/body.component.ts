import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  constructor() {}

  ngOnInit(): void {}

  toggleLogin() {
    console.log('click');
  }
}
