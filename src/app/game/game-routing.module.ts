import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {GameHomePageComponent} from "./pages/game-home-page/game-home-page.component";
import {GameDetailComponent} from "./components/game-detail/game-detail.component";
import {GameGuard} from "../core/guards/game.guard";

const routes = [
  {path: 'games', component: GameHomePageComponent, canActivate: [GameGuard]},
  {path: 'game/:id', component: GameDetailComponent, canActivate: [GameGuard]}
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GameRoutingModule {
}
