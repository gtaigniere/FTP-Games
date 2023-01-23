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

  constructor() {
  }

  ngOnInit(): void {
  }

}
