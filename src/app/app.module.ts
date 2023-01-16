import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameModule} from "./game/game.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from '@angular/router';
import {InterceptReqInterceptor} from "./intercept-req.interceptor";

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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptReqInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
