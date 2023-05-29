import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../models/game';
import {map} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-home-page',
  templateUrl: './game-home-page.component.html',
  styleUrls: ['./game-home-page.component.scss']
})
export class GameHomePageComponent implements OnInit {

  title: string = 'Les jeux Free-To-Play';
  games: Game[] = [];
  activeGame?: Game;
  receivedId: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id') as string;
      if (id) {
        this.gameService.getById(+id).subscribe(
          game => this.activeGame = game
        );
      }
      this.fetchGameDetails(this.receivedId); //id par défaut
    });

    this.fetchGames();
  }

  fetchGames() {
    this.gameService.getAll()
      .pipe(
        map(games => games.filter(game => game.releaseDate && game.releaseDate.getFullYear() > 2020))
      )
      .subscribe(games => this.games = games);
  }

  fetchGameDetails(receivedId: number) {
    this.gameService.getById(receivedId)
      .subscribe(activeGame => this.activeGame = activeGame);
  }

  receivedGameId(id: number) {
    this.receivedId = id;
    this.fetchGameDetails(this.receivedId);
  }
}
