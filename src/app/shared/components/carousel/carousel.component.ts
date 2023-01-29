import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from '../../../game/models/game';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input()
  games: Game[] = [];

  @Output()
  gameImgClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendGameId(id: number) {
    this.gameImgClicked.emit(id);
  }

}
