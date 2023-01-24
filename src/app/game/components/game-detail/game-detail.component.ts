import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {Router} from "@angular/router";

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

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  backToConnection() {
    localStorage.clear();
    this.router.navigate(['/connection']);
  }

}
