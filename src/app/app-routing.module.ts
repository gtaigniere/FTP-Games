import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameDetailComponent} from './game/components/game-detail/game-detail.component';
import {GameHomePageComponent} from "./game/pages/game-home-page/game-home-page.component";

const routes: Routes = [
  {path: 'games', component: GameHomePageComponent},
  {path: 'game/:id', component: GameDetailComponent},
  {path: '**', component: GameHomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
