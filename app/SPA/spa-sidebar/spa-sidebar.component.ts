import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'spa-sidebar',
  templateUrl: './spa-sidebar.component.html',
  styleUrls: ['./spa-sidebar.component.scss']
})
export class SpaSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin(): void {
    this.router.navigate(['login'])
  }

  goToRegister(): void {
    this.router.navigate(['register'])
  }

  goToSignOut(): void {
    this.router.navigate(['signout'])
  }
}
