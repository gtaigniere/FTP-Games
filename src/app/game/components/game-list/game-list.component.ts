import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {Game} from "../../models/game";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  title: string = 'Liste des jeux';
  games: Game[] = [];

  constructor(
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.gameService.getAll().subscribe(
      games => {
        this.games = games;
        console.table(this.games);
      }
    );
    console.log('coucou');
  }

}
