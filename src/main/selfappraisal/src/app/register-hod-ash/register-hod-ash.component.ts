import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../model/userModel/user-model';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-register-hod-ash',
  templateUrl: './register-hod-ash.component.html',
  styleUrls: ['./register-hod-ash.component.css']
})
export class RegisterHodAshComponent implements OnInit {

  userModel: UserModel=new UserModel();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(registerForm:NgForm): void {
    console.log(this.userModel);
    this.userService.createHodAsh(registerForm.value).subscribe(
      (data) => {
        alert("Department Head Registered Succesfully");
        this.router.navigateByUrl('adminHome');
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
