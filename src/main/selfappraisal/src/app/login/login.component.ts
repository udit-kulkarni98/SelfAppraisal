import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, UrlSegment } from '@angular/router';
import { UserModel } from '../model/userModel/user-model';
import { AuthService } from '../services/Auth/auth.service';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  loginData = {
    username: '',
    password: ''
  };

  onSubmit(loginForm: NgForm) {
    this.authService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("login Success");
        console.log(data);
        this.authService.login(data.token);
        this.authService.getCurrentUser().subscribe(
          (user:any)=>{
            this.authService.setUser(user);
            console.log(user);

            if(this.authService.getUserRole()=="ADMIN"){
              alert("Admin Logged in Successfully");
              this.router.navigateByUrl('adminHome');
            } else if(this.authService.getUserRole()=="USER"){
              alert("User Logged in Successfully");
              this.router.navigateByUrl('home');              
            } else if(this.authService.getUserRole()=="PRINCIPAL"){
              alert("Principal Logged in Successfully");
              this.router.navigateByUrl('principal');              
            } else if(this.authService.getUserRole()=="HOD_EXTC"){
              alert("EXTC Department Head Logged in Successfully");
              this.router.navigateByUrl('department_head_extc');              
            } else if(this.authService.getUserRole()=="HOD_CE"){
              alert("CE Department Head Logged in Successfully");
              this.router.navigateByUrl('department_head_ce');              
            } else if(this.authService.getUserRole()=="HOD_CSE"){
              alert("CSE Department Head Logged in Successfully");
              this.router.navigateByUrl('department_head_cse');              
            } else if(this.authService.getUserRole()=="HOD_ASH"){
              alert("ASH Department Head Logged in Successfully");
              this.router.navigateByUrl('department_head_ash');              
            } else if(this.authService.getUserRole()=="HOD_EE"){
              alert("EE Department Head Logged in Successfully");
              this.router.navigateByUrl('department_head_ee');              
            } else if(this.authService.getUserRole()=="HOD_IT"){
              alert("IT Department Head Logged in Successfully");
              this.router.navigateByUrl('department_head_it');              
            } 
            else{
              this.authService.logout();
              location.reload();
            } 
          }
        );
        // if(this.authService.isLoggedIn()){
        //   alert("Logged in Successfully");
        //   this.router.navigateByUrl('home');
        // }
      },
      (error)=>{
        alert("Incorrect Username or Password");
        console.log(error);
      }
    )
  }

  // onSubmit(loginForm:NgForm){
  //   console.log(this.users);
  //   this.userService.login(this.users.username, this.users.password).subscribe((response:any) => {
  //       this.flag = response;
  //       if(this.flag==1){
  //         alert("Logged in Successfully");
  //         this.profile=this.users.username;
  //         this.router.navigateByUrl('home');
  //       } else {
  //         alert("Incorrect Username or Password");
  //       }
  //     }, (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }


}
