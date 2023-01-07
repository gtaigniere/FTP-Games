import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameDetailComponent} from './game/components/game-detail/game-detail.component';
import {GameListComponent} from "./game/components/game-list/game-list.component";

const routes: Routes = [
  {path: 'games', component: GameListComponent},
  {path: 'game/:id', component: GameDetailComponent},
  {path: '**', component: GameListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
