import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/game";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input()
  game?: Game;

  constructor() {
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   if (id) {
    //     // Effectue un appel ajax et obtient les informations demandées lors d'un changement
    //     this.gameService.getById(+id).subscribe(
    //       game => this.game = game
    //     );
    //   }
    // });
  }

}
