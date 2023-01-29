import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";

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
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  backToConnection() {
    this.authService.logout();
    this.router.navigate(['/connection']);
  }

}
