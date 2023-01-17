import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../../game/models/game";
import {GameService} from "../../game/services/game.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input()
  games: Game[] = [];
  id?: number;

  @Output()
  gameImgClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.getAll().subscribe(
      games => {
        this.games = games;
      }
    );
  }

  sendGameId(id: number) {
    this.gameImgClicked.emit(this.id);
  }

}
