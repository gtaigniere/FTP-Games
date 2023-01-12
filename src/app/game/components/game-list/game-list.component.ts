import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {Game} from "../../models/game";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  title: string = 'Les jeux Free-To-Play';
  games: Game[] = [];
  activeGame?: Game;
  id?: number;

  constructor(
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.gameService.getAll().subscribe(
      games => {
        this.games = games;
      }
    );
    this.displayGameDetails(this.id = 540) //id par défaut
  }

  displayGameDetails(id: number) {
    this.gameService.getById(id).subscribe(
      activeGame => this.activeGame = activeGame
    );
  }

}
