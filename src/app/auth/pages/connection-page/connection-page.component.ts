import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from "../../../shared/models/user";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {

  title: string = 'Connexion';
  user: User = {
    nickname: '',
    email: '',
    password: ''
  };
  userError: boolean = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  loginUser(form: NgForm) {
    const currentUser: User = {
      nickname: '',
      email: form.value.email,
      password: form.value.pwd
    };

    if (this.userService.exists(currentUser)) {
      this.authService.login(currentUser);
      this.router.navigate(['/games']);
    } else {
      // Faire en sorte d'afficher un message d'erreur sur la page du formulaire
      this.userError = true;
    }
  }

}
