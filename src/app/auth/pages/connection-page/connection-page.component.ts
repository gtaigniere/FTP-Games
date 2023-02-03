import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../../shared/services/user.service";
import {LoginRequestPayload} from "../../models/login-request-payload";

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {

  title = 'Connexion';
  user = {
    username: '',
    email: '',
    password: ''
  };

  activeMsg = false;
  msgClass = '';
  msgText = '';
  testeur = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.testeur = params.get('test') as string;
      console.log(this.testeur);
    });
  }

  loginUser(form: NgForm) {
    const loginRequestPayLoad: LoginRequestPayload = {
      email: form.value.email,
      password: form.value.pwd
    };

    this.authService.login(loginRequestPayLoad).subscribe(
      loggedIn => {
          if (loggedIn) {
            this.router.navigate(['/games']);
          } else {
            this.activeMsg = true;
            this.msgClass = 'alert alert-danger';
            this.msgText = 'Email et/ou mot de passe incorrect(s).';
            this.router.navigate(['/connection'], {
              queryParams: {
                error: true,
                test: 'Coucou'
              }
            });
          }
        }
    );
  }

}
