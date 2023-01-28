import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from "../../../shared/models/user";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../../shared/services/user.service";
import {LoginRequestPayload} from "../../models/login-request-payload";

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {

  title: string = 'Connexion';
  user: User = {
    username: '',
    email: '',
    password: ''
  };

  activeMsg: boolean = false;
  msgClass: string = '';
  msgText: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  // A finir ou a remplacer et/ou à renommer
  loginUser(form: NgForm) {
    const loginRequestPayLoad: LoginRequestPayload = {
      email: form.value.email,
      password: form.value.pwd
    };

  }

}
