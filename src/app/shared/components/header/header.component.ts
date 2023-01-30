import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;
  username = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authService.isLogged().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      if (this.loggedIn) {
        this.username = localStorage.getItem('username') as string;
      }
    });
  }

  goToConnection() {
    this.router.navigate(['/connection']);
  }

  disconnection() {
    this.authService.logout();
  }

}
