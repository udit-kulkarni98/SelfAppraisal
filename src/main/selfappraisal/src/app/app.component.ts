import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'selfappraisal';
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }
  
  /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof AppComponent
   */
   hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
