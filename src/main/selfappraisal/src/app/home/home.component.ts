import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  prof() {
    this.router.navigateByUrl('professors');
  };

  assistant_prof() {
    this.router.navigateByUrl('assistant-professors');
  };

  associate_prof() {
    this.router.navigateByUrl('associate-professors');
  };

}
