import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from "../../../shared/models/user";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {

  title: string = 'Connexion';
  // submitted = false;
  email?: string;
  pwd?: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  loginUser(form: NgForm) {
    // this.submitted = true;
    const user: User = {
      email: form.value.email,
      password: form.value.pwd
    };
    this.authService.login(user);
    this.router.navigate(['/games']);
  }

}
