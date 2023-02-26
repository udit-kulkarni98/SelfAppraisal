import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../model/userModel/user-model';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userModel: UserModel=new UserModel();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(registerForm:NgForm): void {
    console.log(this.userModel);
    this.userService.addUser(registerForm.value).subscribe(
      (data) => {
        alert("User Registered Succesfully");
        this.router.navigateByUrl('login');
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
