import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  public educaciones: Educacion[]=[];

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.getEducacions();
  }

  public getEducacions():void{
    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[]) =>{
        this.educaciones=Response;
      },
      error:(HttpErrorResponse)=>{
        alert(Error);
      }
    })
  }
}
