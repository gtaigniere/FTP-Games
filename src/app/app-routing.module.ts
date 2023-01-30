import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameHomePageComponent} from "./game/pages/game-home-page/game-home-page.component";
import {ConnectionPageComponent} from "./auth/pages/connection-page/connection-page.component";
import {GameGuard} from "./core/guards/game.guard";

const routes: Routes = [
  {path: '', component: GameHomePageComponent, canActivate: [GameGuard]},
  {path: 'connection', component: ConnectionPageComponent},
  {path: '**', component: GameHomePageComponent, canActivate: [GameGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
