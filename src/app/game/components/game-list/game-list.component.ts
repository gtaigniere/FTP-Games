import {Component, OnInit} from '@angular/core';
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
  receivedId?: number;

  constructor(
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.displayGamesList();
    this.displayGameDetails(this.receivedId = 1); //id par défaut
  }

  displayGamesList() {
    this.gameService.getAll().subscribe(
      games => this.games = games
    );
  }

  displayGameDetails(receivedId: number) {
    this.gameService.getById(receivedId).subscribe(
      activeGame => this.activeGame = activeGame
    );
  }

  receivedGameId(id: number) {
    this.receivedId = id;
    this.displayGameDetails(this.receivedId);
  }
}
