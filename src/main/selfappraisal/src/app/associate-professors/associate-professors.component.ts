import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Professor } from '../model/professor/professor';
import { AuthService } from '../services/Auth/auth.service';
import { ProfessorService } from '../services/professorService/professor.service';

@Component({
  selector: 'app-associate-professors',
  templateUrl: './associate-professors.component.html',
  styleUrls: ['./associate-professors.component.css']
})
export class AssociateProfessorsComponent implements OnInit {

  private baseUrl = 'http://localhost:8080/api/';

  professors: Professor = new Professor();
  data: any = [];
  constructor(private professorsService: ProfessorService, private router: Router, public authService:AuthService) { }

  ngOnInit(): void {
    this.getUserData();
    this.data.id=this.authService.getUser().id;
    this.data.designation="Associate Professor";
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
