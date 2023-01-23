import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from "../../../shared/models/user";

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

  constructor() {
  }

  ngOnInit(): void {
  }

  loginUser(form: NgForm) {
    // this.submitted = true;
    const user: User = {
      email: form.value.email,
      password: form.value.pwd
    };
    localStorage.setItem('email', user.email);
    localStorage.setItem('pwd', user.password);
  }

}
