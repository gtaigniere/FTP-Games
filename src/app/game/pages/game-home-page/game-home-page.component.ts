import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../models/game';

@Component({
  selector: 'app-game-home-page',
  templateUrl: './game-home-page.component.html',
  styleUrls: ['./game-home-page.component.scss']
})
export class GameHomePageComponent implements OnInit {

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
