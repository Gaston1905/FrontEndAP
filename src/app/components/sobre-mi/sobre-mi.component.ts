import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss'],
})
export class SobreMiComponent implements OnInit {
  constructor() {}
  faPenToSquare = faPenToSquare;
  

  ngOnInit(): void { 
}
}
