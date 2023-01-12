import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameModule} from "./game/game.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameModule,
    HttpClientModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
