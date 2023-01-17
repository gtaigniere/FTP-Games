import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {GameDetailComponent} from './components/game-detail/game-detail.component';
import {GameListComponent} from './components/game-list/game-list.component';
import {AppModule} from "../app.module";

@NgModule({
  declarations: [
    GameDetailComponent,
    GameListComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class GameModule {
}
