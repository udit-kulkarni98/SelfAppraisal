import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as internal from 'stream';
import { Professor } from '../model/professor/professor';
import { AuthService } from '../services/Auth/auth.service';
import { ProfessorService } from '../services/professorService/professor.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {

  private baseUrl = 'http://localhost:8080/api/';

  professors: Professor = new Professor();
  data: any = [];
  constructor(private professorsService: ProfessorService, private router: Router, public authService:AuthService) { }

  ngOnInit(): void {
    this.getUserData();
    this.data.id=this.authService.getUser().id;
    this.data.designation="Professor";
  }

  private getUserData():void{
    this.professorsService.getDataById(this.authService.getUser().id)
      .subscribe((res) => {
        this.data = res;
        console.log(this.data);
      },(error)=>{

      });
  }

  public OnSubmit(professorForm:NgForm): void {
    console.log(this.professors);
    this.professorsService.addData(professorForm.value).subscribe(
      (data) => {
        alert("Data succesfully sent");
        window.location.reload;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
