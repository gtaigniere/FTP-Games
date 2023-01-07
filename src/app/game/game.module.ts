import {NgModule} from '@angular/core';
import {GameDetailComponent} from './components/game-detail/game-detail.component';
import {GameListComponent} from './components/game-list/game-list.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    GameDetailComponent,
    GameListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule {
}
