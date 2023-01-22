import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input()
  game?: Game;
  email?: string;
  pwd?: string;
  user: User;

  constructor() {
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.pwd = localStorage.getItem('pwd');
    if (this.email !== '' && this.pwd !== '') {
      this.user = {
        email: this.email,
        password: this.pwd
      };
      console.log(this.user);
    }
  }

}
