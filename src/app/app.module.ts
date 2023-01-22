import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameModule} from './game/game.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {InterceptReqInterceptor} from './intercept-req.interceptor';
import {FormsModule} from '@angular/forms';
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AuthModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptReqInterceptor, multi: true},
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
