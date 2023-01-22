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
  submitted = false;
  user: User;

  constructor() {
  }

  ngOnInit(): void {
  }

  loginUser(form: NgForm) {
    this.submitted = true;
    this.user = {
      email: form.value.user.email,
      password: form.value.user.password
    };
    console.table(this.user);
  }

}
