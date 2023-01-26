import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from "../../../shared/models/user";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../../shared/services/user.service";
import {Observable} from "rxjs";

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

  loginUser(form: NgForm) {
    const currentUser: User = {
      nickname: '',
      email: form.value.email,
      password: form.value.pwd
    };
    if (this.authService.isAuth(currentUser)) {
      this.userService.getByEmail(currentUser.email).subscribe(
        user => this.user = user
      );
      try {
        this.authService.login(this.user);
        this.router.navigate(['/games']);
      } catch {
        this.activeMsg = true;
        this.msgClass = 'alert alert-danger';
        this.msgText = 'Email et/ou mot de passe incorrect.';
      }
    } else {
      this.activeMsg = true;
      this.msgClass = 'alert alert-danger';
      this.msgText = 'L\'utilisateur n\'a pas été trouvé.';
    }
  }

}
