import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/userService';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [],
})
export class AppComponent {
  constructor(private router: Router, public userService: UserService) {}

  logout() {
    this.userService.logout();
  }
}
