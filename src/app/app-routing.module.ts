import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameHomePageComponent} from "./game/pages/game-home-page/game-home-page.component";
import {ConnectionPageComponent} from "./auth/pages/connection-page/connection-page.component";
import {GameGuard} from "./core/guards/game.guard";
import {RegistrationPageComponent} from "./auth/pages/registration-page/registration-page.component";

const routes: Routes = [
  {path: '', component: GameHomePageComponent, canActivate: [GameGuard]},
  {path: 'connection', component: ConnectionPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: '**', component: GameHomePageComponent, canActivate: [GameGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
