import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameDetailComponent} from './components/game-detail/game-detail.component';
import {GameHomePageComponent} from './pages/game-home-page/game-home-page.component';
import {SharedModule} from "../shared/shared.module";
import {RouterLinkWithHref} from "@angular/router";
import {TextColorDirective} from "../core/directives/text-color.directive";

@NgModule({
  declarations: [
    GameDetailComponent,
    GameHomePageComponent,
    TextColorDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLinkWithHref
  ],
  exports: [
    TextColorDirective
  ]
})
export class GameModule {
}
