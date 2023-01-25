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
  // submitted = false;
  email?: string;
  pwd?: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  loginUser(form: NgForm) {
    // this.submitted = true;
    const currentUser: User = {
      email: form.value.email,
      password: form.value.pwd
    };
    const user: User|null = this.userService.getByEmail(currentUser.email);

    if (user != null) {
      if (this.userService.verifPwd(currentUser, user)) {
        this.authService.login(currentUser);
        this.router.navigate(['/games']);
      } else {
        console.error("Mot de passe incorrecte");
      }
    } else {
      console.error("L'utilisateur n'a pas été trouvé");
    }
    this.router.navigate(['/connection']);
  }

}
