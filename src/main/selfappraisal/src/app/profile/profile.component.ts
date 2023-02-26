import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, public authService:AuthService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
