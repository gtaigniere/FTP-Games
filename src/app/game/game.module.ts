import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameDetailComponent} from './components/game-detail/game-detail.component';
import {GameHomePageComponent} from './pages/game-home-page/game-home-page.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    GameDetailComponent,
    GameHomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GameModule {
}
