import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  // }

  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }

  createPrincipal() {
    this.router.navigateByUrl('registerPrincipal');
  }

  createHodExtc() {
    this.router.navigateByUrl('register_hod_extc');
  }

  createHodCe() {
    this.router.navigateByUrl('register_hod_ce');
  }

  createHodCse() {
    this.router.navigateByUrl('register_hod_cse');
  }

  createHodAsh() {
    this.router.navigateByUrl('register_hod_ash');
  }

  createHodEe() {
    this.router.navigateByUrl('register_hod_ee');
  }

  createHodIt() {
    this.router.navigateByUrl('register_hod_it');
  }

}
